<?php
namespace frontend\controllers;

use frontend\models\ResendVerificationEmailForm;
use frontend\models\VerifyEmailForm;
use Yii;
use yii\base\InvalidArgumentException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;
use app\models\EntryForm;
use app\models\AddBookForm;
use yii\data\Pagination;
use app\models\BookList;

/**
 * Site controller
 */
class SiteController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout', 'signup'],
                'rules' => [
                    [
                        'actions' => ['signup'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index');
    }

    /**
     * Logs in a user.
     *
     * @return mixed
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->goHome();
        }

        $model = new LoginForm();
        if ($model->load(Yii::$app->request->post()) && $model->login()) {
            return $this->goBack();
        } else {
            $model->password = '';

            return $this->render('login', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Logs out the current user.
     *
     * @return mixed
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->goHome();
    }

    /**
     * Displays contact page.
     *
     * @return mixed
     */
    public function actionContact()
    {
        $model = new ContactForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail(Yii::$app->params['adminEmail'])) {
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } else {
                Yii::$app->session->setFlash('error', 'There was an error sending your message.');
            }

            return $this->refresh();
        } else {
            return $this->render('contact', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Displays about page.
     *
     * @return mixed
     */
    public function actionAbout()
    {
        return $this->render('about');
    }

    /**
     * Signs user up.
     *
     * @return mixed
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post()) && $model->signup()) {
            Yii::$app->session->setFlash('success', 'Thank you for registration. Please check your inbox for verification email.');
            return $this->goHome();
        }

        return $this->render('signup', [
            'model' => $model,
        ]);
    }

    /**
     * Requests password reset.
     *
     * @return mixed
     */
    public function actionRequestPasswordReset()
    {
        $model = new PasswordResetRequestForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');

                return $this->goHome();
            } else {
                Yii::$app->session->setFlash('error', 'Sorry, we are unable to reset password for the provided email address.');
            }
        }

        return $this->render('requestPasswordResetToken', [
            'model' => $model,
        ]);
    }

    /**
     * Resets password.
     *
     * @param string $token
     * @return mixed
     * @throws BadRequestHttpException
     */
    public function actionResetPassword($token)
    {
        try {
            $model = new ResetPasswordForm($token);
        } catch (InvalidArgumentException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }

        if ($model->load(Yii::$app->request->post()) && $model->validate() && $model->resetPassword()) {
            Yii::$app->session->setFlash('success', 'New password saved.');

            return $this->goHome();
        }

        return $this->render('resetPassword', [
            'model' => $model,
        ]);
    }

    /**
     * Verify email address
     *
     * @param string $token
     * @throws BadRequestHttpException
     * @return yii\web\Response
     */
    public function actionVerifyEmail($token)
    {
        try {
            $model = new VerifyEmailForm($token);
        } catch (InvalidArgumentException $e) {
            throw new BadRequestHttpException($e->getMessage());
        }
        if ($user = $model->verifyEmail()) {
            if (Yii::$app->user->login($user)) {
                Yii::$app->session->setFlash('success', 'Your email has been confirmed!');
                return $this->goHome();
            }
        }

        Yii::$app->session->setFlash('error', 'Sorry, we are unable to verify your account with provided token.');
        return $this->goHome();
    }

    /**
     * Resend verification email
     *
     * @return mixed
     */
    public function actionResendVerificationEmail()
    {
        $model = new ResendVerificationEmailForm();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            if ($model->sendEmail()) {
                Yii::$app->session->setFlash('success', 'Check your email for further instructions.');
                return $this->goHome();
            }
            Yii::$app->session->setFlash('error', 'Sorry, we are unable to resend verification email for the provided email address.');
        }

        return $this->render('resendVerificationEmail', [
            'model' => $model
        ]);
    }
    /**
     * Resend verification email
     *
     * @return mixed
     */
    public function actionSay($message)
    {
        return $this->render('say', ['message' => $message]);
    }

    /**
     * Displays BOOK首页 page.
     *
     * @return mixed
     */
    public function actionBookhome()
    {
        return $this->render('bookhome');
    }

    /**表达验证操作*/

    public function actionEntry()
    {
        $model = new EntryForm;

        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            // 验证 $model 收到的数据
            // var_dump($model->name);
            // 做些有意义的事 ...

            return $this->render('entry-confirm', ['model' => $model]);
        } else {
            // 无论是初始化显示还是数据验证错误
            return $this->render('entry', ['model' => $model]);
        }
    }
    /**列表数据拿取 */
    public function actionBookindex()
    {

        $query = BookList::find();

        $pagination = new Pagination([
            'defaultPageSize' => 10,
            'totalCount' => $query->count(),
        ]);

        $countries = $query->orderBy('bid')
            ->offset($pagination->offset)
            ->limit($pagination->limit)
            ->all();

        return $this->render('bookindex', [
            'countries' => $countries,
            'pagination' => $pagination,
        ]);
    }


    /**添加书接口*/

    public function actionAddbook($bid = '')
    {
        $model = new AddBookForm;

        if ($model->load(Yii::$app->request->post())) {
            $BookList = new BookList();
            echo '2';
            //   验证 $model 收到的数据
            //   做些有意义的事 ...
            $BookList->name = $model->name;
            $BookList->img = $model->img;
            $BookList->price = $model->price;
            $BookList->author = $model->author;
            $BookList->Press = $model->Press;
            $BookList->introduce = $model->introduce;
            if ($BookList->save()) {
                return $this->redirect(array('site/bookindex', 'bid' => $bid));
                // return $this->redirect(array('site/bookindex'));
            }
        } else {
            //   无论是初始化显示还是数据验证错误
            $BookList = new BookList();
            if ($bid) {
                $updata = Yii::$app->request->post();
                var_dump((boolean)$updata);
                if ($updata) {
                    echo '1';
                var_dump(Yii::$app->request->post());
                    $BookList = BookList::find()->where(['bid'=>$bid])->one(); //获取name等于test的模型
                    $BookList->name = $updata['BookList']['name'];
                    $BookList->img = $updata['BookList']['img'];
                    $BookList->price = $updata['BookList']['price'];
                    $BookList->author = $updata['BookList']['author'];
                    $BookList->Press = $updata['BookList']['Press'];
                    $BookList->introduce = $updata['BookList']['introduce'];
                    if ($BookList->save()) {
                        return $this->redirect(array('site/bookindex', 'bid' => $bid));
                    }
                } else {
                    echo '2';
                    $UpdateBookList = BookList::find()->where(['bid' => $bid])->one(); //获取name等于test的模型
                    return $this->render('addbook', ['model' => $UpdateBookList, 'bid' => $bid]);
                }

            } else {
                echo '4';
                return $this->render('addbook', ['model' => $model, 'bid' => $bid]);
            }
        }
    }


    /**
     * 删除数据
     */
    public function actionDelete($bid)
    {
        BookList::findOne($bid)->delete();
        return $this->redirect(array('site/bookindex'));
    }
    /*
    * 更新数据
    */
    public function actionUpdate($bid)
    {
        //    BookList::updateAll(['bid' => $bid],  ['name'=> 'Ifound','img'=>'Ifound']); 
        //    $BookList = BookList::find()->where(['bid'=>$bid])->one(); //获取name等于test的模型
        //    $BookList->name = 'Ifound'; //修改age属性值
        //    $BookList->save();   //保存
        return $this->redirect(array('site/addbook', 'bid' => $bid));
    }
}
