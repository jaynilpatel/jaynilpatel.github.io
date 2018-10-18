var app = angular.module('resume', [])
    .controller('personCtrl', function ($scope) {
        $scope.personInfo = {
            img: 'my-profile.jpg',
            name: 'Jaynil S. Patel',
            description: 'AI | ML | DL | CV',
            email: {
                text: 'hello.jaynil@gmail.com',
                url: 'mailto:hello.jaynil@gmail.com'
            },
            social: [{
                url: 'https://github.com/jaynilpatel',
                icon: 'fa-github fa-lg'
            }, {
                url: 'https://www.linkedin.com/in/jaynil',
                icon: 'fa-linkedin-in fa-lg'
            }, {
                url: 'https://twitter.com/jaynilpatel97',
                icon: 'fa-twitter fa-lg'
            }, {
                url: 'http://jaynilpatel.github.io',
                icon: 'fas fa-globe fa-lg',
            }]
        };
    })
    .controller('educationCtrl', function ($scope) {
        $scope.schools = [{
            name: 'Birla Vishvakarma Mahavidyalaya',
            program: 'B.Tech. Information Technology',
            city: 'Anand',
            state: 'Gujarat',
            stateAbbr: 'GUJ',
            dates: '2015 - Present'
        }, {
            name: 'Bharatiya Vidya Bhavans',
            program: 'High School',
            city: 'Vadodara',
            state: 'Gujarat',
            stateAbbr: 'GUJ',
            dates: '2013 - 2015'
        }];
    })
    .controller('languagesCtrl', function ($scope) {
        $scope.languages = [{
            name: 'Proficient',
            types: [
                'Python',
                'Java',
                'C++'
            ]
        }, {
            name: 'Familiar',
            types: [
                'Javascript',
                'C',
                'Android',
                'C#',
            ]
        }, {
            name: 'Web',
            types: [
                'NodeJs',
                'PHP',
                'VueJs',
                'jQuery',
                'AngularJs',
                'ASP.NET',
            ]
        }, {
            name: 'Machine Learning',
            types: [
                'TensorFlow',
                'Scikit-learn',
                'Keras',
                'TFLearn',
                'Numpy',
                'Matplotlib',
                'OpenCV',
            ]
        }, {
            name: 'Other',
            types: [
                'JavaFX',
                'JFoenix',
                'PySC2',
            ]
        }];
    })
    .controller('toolsCtrl', function ($scope) {
        $scope.tools = [{
            name: 'Source Control',
            types: [
                'Git',
                'GitHub',
                'Bitbucket',
                'SourceTree'
            ]
        }, {
            name: 'IDE',
            types: [
                'Jupyter Notebooks',
                'IntelliJ IDEA',
                'Visual Studio 2017',
                'Android Studio',
                'Unity 3D',
                'Proteus',
            ]
        }, {
            name: 'Platforms',
            types: [
                'Windows',
                'Raspberry Pi',
                'Ardunio'
            ]
        }, {
            name: 'Database',
            types: [
                'SQL',
                'MongoDB'
            ]
        }];
    })
    .controller('organizationCtrl', function ($scope) {
        $scope.organizations = [{
                name: 'Travizia Infosec, Ahmedabad',
                url: 'http://www.travizia.in/home.html',
                positions: [{
                    title: 'Android Development Trainee',
                    responsibilities: [
                        'Assimilated the fundamentals of mobile app development',
                        'Built single page application for SMS sending',
                        'Version Control with Git'
                    ]
                }],
                dates: 'June 2018'
            },
            {
                name: 'Maxgen Technologies, Vadodara',
                url: 'http://www.maxgentechnologies.com/',
                positions: [{
                    title: 'Web Developer Intern',
                    responsibilities: [
                        'Build and contribute to hand-coded  websites and applications',
                        'Write semantic HTML5 and SCSS for scalable and responsive layouts',
                        'Collaborated with team members on UI/UX ideas for existing and new products',
                        'Managed backend using Core PHP',
                        'Maintained client sites on Wordpress',
                        'Version control with Git'
                    ]
                }],
                dates: 'May 2017 - July 2017'
            },
        ];
    })
    .controller('handsOnCtrl', function ($scope) {
        $scope.projects = [{
                name: 'Autoencoder for Generating MNIST Images ',
                url: 'https://github.com/jaynilpatel/autoencoder',
                tools: 'Python, TensorFlow',
                description: 'This notebook demonstrates 2 different ways for performing encoding and decoding of mnist images. The first approach is the traditional approach and second approach is using convolutional nn.'
            },
            {
                name: 'StarCraft 2 AI Bot',
                url: 'http://github.com/jaynilpatel/starcraft2',
                tools: 'Python, Keras, PySC2',
                description: 'An attempt to implement a deep learning model (CNN) in the strategic game, Starcraft 2. The goal here was to build a model which can learn the tactics for playing and winning the game against the another bot (built-in). A library known as PySC2 was extensively used as an API in order to interact with game objects using python.'
            },
            {
                name: 'Predicting California\'s Housing Prices',
                url: 'http://gtihub.com/jaynilpatel/california-housing',
                tools: 'Python, Scikit-learn, Matplotlib',
                description: 'The objective here was to build a machine learning model to predict housing prices in California using the California Census Data. The data has metrics such as population, median income, median housing prices, and so on. The data was mostly raw and lacked any form of preprocessing. Hence a lot of time was invested in processing and cleaning the data, thus getting it ready for a mathematical model to gain insights. The data was tested with linear-regression, decision-tree-regressor and random-forest-regressor.'
            },
            {
                name: 'Neural Style Transfer Using VGG16',
                url: 'http://gtihub.com/jaynilpatel/style-transfer-vgg16',
                tools: 'Python, TensorFlow',
                description: 'Neural style transfer for blending a style of one image onto the content of another using Oxford\'s object recognition model- VGG16. It shows how it is actually possible to transfer artistic style from one painting to another picture using convolutional nn. My implementation employs TensorFlow for training the network.',
            }
        ];
    })
    .controller('publicationsCtrl', function ($scope) {
        $scope.publications = [{
                name: 'Review On Generative Adversarial Networks',
                url: 'http://ijtimes.com/papers/finished_papers/150724100702.pdf',
                journal: 'International Journal of Technical Innovation in Modern Engineering & Science: Volume No: 4 & Issue No: 07, July 2018)',
                description: 'In the last few years, a type of generative model known as Generative Adversarial Networks (GANs), has\
                achieved tremendous success mainly in the field of computer vision, image classification, speech and language\
                processing, etc. GANs are the models which are used to produce new samples which have similar data distribution as\
                of the training dataset. In this review paper, we will first introduce the idea behind the GANs, followed by a brief\
                overview of various types of GANs as well as comparing it with different generative models. Then, we will discuss the\
                application range and finally the future work with its associated research frontiers.'
            },
            {
                name: 'Implementation of Batch Normalization in Tensorflow',
                url: 'https://medium.com/@jaynilbvb/implementing-batch-normalization-in-tensorflow-db3784f61693',
                journal: 'Medium, 2018',
                description: 'Training Deep Neural Networks is complicated by the fact that the distribution of each layer’s\
                inputs changes during training, as the parameters of the previous layers change. This slows down the training \
                by requiring lower learning rates and careful parameter initialization and makes it notoriously hard to train models\
                with saturating non-linearities. Batch Normalization is used to address these kinds of problems which are also\
                known as vanishing/exploding gradients problems. It is also one of the key methods which has been successful in \
                addressing the previous shortcomings of neural networks.',
            }
        ];
    })
    .controller('interestsCtrl', function ($scope) {
        $scope.interests = [{
            area: 'Computer Vision ',}, {
            area: 'Generative Art ',}, {
            area: 'Computational Creativity ',}, {
            area: 'Web Designing ',}, 
        ];
    })

