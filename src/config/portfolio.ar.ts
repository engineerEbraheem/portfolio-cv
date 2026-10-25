import { PortfolioData } from './portfolio'

export const portfolioAr: PortfolioData = {
  personal: {
    name: 'إبراهيم ناجي الثوبري',
    title: 'مهندس برمجيات (مطور واجهات أمامية)',
    location: 'صنعاء، اليمن',
    address: 'شارع النهضة، صنعاء، اليمن',
    email: 'ebraheemnaji123@gmail.com',
    phone: '+967 773307514',
    github: 'https://github.com/engineerEbraheem',
    linkedin: 'https://www.linkedin.com/in/ebraheem-althobary-696022245',
    status: 'متاح لأدوار هندسة الواجهات الأمامية والأنظمة البرمجية',
    bio: 'مهندس برمجيات عالي الكفاءة متخصص في تطوير الواجهات الأمامية وهندسة الأنظمة التفاعلية الحديثة، مع خبرة عملية في بناء تطبيقات ويب قابلة للتوسع، وإدارة الحالة المعقدة، والتحليل المنطقي لحل المشكلات البرمجية.',
    profileSummary:
      'مهندس برمجيات ذو قدرة عالية على التكيف ومتخصص في تطوير الواجهات الأمامية مدفوعٌ بشغف التعلم المستمر وإتقان التقنيات الجديدة. أتميز في بناء تطبيقات ويب قوية وقابلة للتوسع، وأزدهر في بيئات العمل التعاونية والديناميكية. يجمع نهجي في العمل بين مهارات حل المشكلات القوية والتفكير التحليلي، بالإضافة إلى إدارة الوقت الممتازة والمرونة؛ مما يضمن تقديم مخرجات عالية الجودة وعمل جماعي فعال. واثق من قدرتي على التكيف، والتعلم، والتغلب على التحديات، وملتزم بالتميز في أي مشروع.',
    languages: [
      { name: 'العربية', level: 'اللغة الأم' },
      { name: 'الإنجليزية', level: 'متوسط' },
    ],
    softSkills: [
      'التعلم المستمر والقدرة على التكيف',
      'حل المشكلات والتفكير التحليلي',
      'التعاون والتواصل الفعال',
      'إدارة الوقت والتنظيم والمرونة',
      'أساسيات شبكات الكمبيوتر والأمن السيبراني',
      'أنظمة التحكم، الأتمتة، الروبوتات والذكاء الاصطناعي',
      'معرفة عملية بحزمة برامج مايكروسوفت أوفيس (Word, Excel, PowerPoint)',
    ],
  },

  navigation: [
    { label: 'الرئيسية', path: '/', icon: 'lucide:home' },
    { label: 'عني والخبرات', path: '/about', icon: 'lucide:user' },
    { label: 'المشاريع', path: '/projects', icon: 'lucide:layers' },
    { label: 'تواصل', path: '/contact', icon: 'lucide:send' },
  ],

  experience: [
    {
      company: 'ديب سيفر - اليمن',
      location: 'اليمن',
      role: 'مهندس برمجيات (مطور واجهات أمامية)',
      period: '01/2024 - حتى الآن',
      isCurrent: true,
      description: 'هندسة تطبيقات الويب للمؤسسات وتطوير واجهات المستخدم',
      highlights: [
        'قيادة تطوير تطبيقات ويب قوية، قابلة للتوسع، وسهلة الاستخدام باستخدام مفاهيم React المتقدمة وتقنيات الواجهة الأمامية الحديثة.',
        'تنفيذ إدارة فعالة لحالة التطبيق Zustand، والتوجيه المعقد ومسارات التنقل (React Router, Remix Router)، والنماذج التفاعلية الذكية (React Hook Form)، وتحسين جلب واستدعاء البيانات (TanStack Query, OpenApiFetch).',
        'تصميم واجهات مستخدم متجاوبة باستخدام Tailwind CSS وSASS وPrimeReact وUNO-css وأداة D3.js لتمثيل البيانات مرئياً، مع ضمان جودة الكود وفقاً لمعايير ESLint.',
        'التعاون المشترك بين الفرق لدمج وتكامل واجهات برمجة التطبيقات API integration، مع الاعتماد على Git/GitLab لإصدارات التحكم وAzure لعمليات النشر والاستضافة.',
      ],
      technologies: [
        'React',
        'Zustand',
        'TanStack Query',
        'OpenApiFetch',
        'React Hook Form',
        'PrimeReact',
        'Tailwind CSS',
        'SASS',
        'UNO-css',
        'D3.js',
        'GitLab',
        'Azure',
      ],
    },
    {
      company: 'شركة يوتاجيت للأنظمة المحدودة - اليمن',
      location: 'اليمن',
      role: 'مهندس ضمان جودة البرمجيات (QA Engineer)',
      period: '09/2022 - 11/2022',
      isCurrent: false,
      description:
        'تنفيذ اختبارات شاملة لجودة البرمجيات والواجهات، والتحقق من سلامة الأداء والتجاوب وخلو المنظومة من الأخطاء قبل إطلاقها للإنتاج.',
      highlights: [
        'إجراء اختبارات شاملة للبرمجيات وتقديم الدعم الفني لضمان جودة التطبيقات وعملها بكفاءة وموثوقية عالية.',
        'تحليل متطلبات النظام، وتحديد العيوب والأخطاء البرمجية، والتعاون مع الفرق الهندسية لحل المشكلات وتحسين الأداء.',
      ],
      technologies: ['QA Testing', 'Bug Tracking', 'Requirements Analysis', 'Software Verification'],
    },
  ],

  education: [
    {
      degree: 'دبلوم في تصميم وبرمجة مواقع الويب (مطور شامل Full Stack)',
      institution: 'المعهد العام للاتصالات (GTI)',
      period: '01/2023 - 06/2023',
      description: 'هندسة الويب الشاملة، معايير JavaScript الحديثة، المعمارية المتقدمة وتصميم قواعد البيانات.',
    },
    {
      degree: 'بكالوريوس في الهندسة الكهربائية (هندسة الحاسبات والتحكم)',
      institution: 'جامعة صنعاء',
      faculty: 'كلية الهندسة',
      period: '03/2017 - 11/2021',
      description: 'أنظمة الحاسوب، المتحكمات الدقيقة، الأتمتة الصناعية، خوارزميات التحكم وهندسة البرمجيات.',
    },
  ],

  skillCategories: [
    {
      category: 'تطوير الواجهات الأمامية (ريأكت - مستوى متقدم)',
      icon: 'lucide:layout',
      skills: [
        'React.js',
        'Zustand',
        'Redux Toolkit',
        'TanStack Query (React Query)',
        'OpenApiFetch',
        'React Hook Form',
        'PrimeReact',
        'Tailwind CSS',
        'SASS',
        'UNO-css',
        'D3.js Data Visualization',
        'LinguiJS',
        'TypeScript',
        'JavaScript (ESNext)',
        'HTML5 & CSS3',
        'Bootstrap',
      ],
    },
    {
      category: 'البرمجة الخلفية وقواعد البيانات',
      icon: 'lucide:database',
      skills: ['PHP', 'ASP.NET', 'C#', 'C++', 'Python', 'Java', 'MySQL', 'Oracle', 'Microsoft SQL Server'],
    },
    {
      category: 'أدوات الهندسة والعمليات DevOps',
      icon: 'lucide:terminal',
      skills: ['Git', 'GitLab', 'Azure', 'ESLint', 'REST APIs', 'JSON / AJAX', 'jQuery'],
    },
  ],

  projects: [
    {
      id: 'portfolio-cv-platform',
      title: 'البورتفوليو المعماري الاحترافي',
      subtitle: 'React 19, TanStack Router, Zustand & Radix UI',
      summary:
        'منصة معرض أعمال متقدمة ومبنية بأحدث معايير React 19 و TypeScript، مع توجيه آمن عبر TanStack Router، وإدارة حالة بـ Zustand، ومكونات Radix UI المجردة، وتدويل كامل LTR/RTL بدون وقت تشغيل عبر LinguiJS.',
      description:
        'بناء وهندسة منصة معرض أعمال وسيرة ذاتية هندسية احترافية باستخدام React 19 و TypeScript وتوجيه مسارات قائم على الملفات عبر TanStack Router، مع إدارة حالة عبر Zustand ومكونات Radix UI مع Tailwind CSS. تتميز بتصميم إنساني عالي الدقة، وتوافق ثنائي الاتجاه كامل (LTR/RTL) وخطوط محلية مستضافة ذاتياً.',
      category: 'معمارية رائدة',
      technologies: ['React 19', 'TypeScript', 'TanStack Router', 'Zustand', 'Tailwind CSS', 'Radix UI', 'LinguiJS'],
      githubUrl: 'https://github.com/engineerEbraheem/portfolio-cv',
      demoUrl: 'https://github.com/engineerEbraheem/portfolio-cv',
      highlights: [
        'أمان مطلق للأنواع البرمجية Type Safety عبر شجرة مسارات TanStack Router المولدة آلياً.',
        'إدارة مركزية للحالة تدعم مزامنة السمة والاتجاه اللغوي تلقائياً عبر Zustand.',
        'واجهة عالية الأداء وسهلة الوصول بالاعتماد على Radix UI وخطوط محلية مستضافة بدون CDN.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'منصة معرض أعمال مهندسة بدقة تتبع معايير تصميم Vercel وRaycast للابتعاد الكامل عن القوالب الجاهزة وتصاميم الذكاء الاصطناعي السطحية.',
        objectives: [
          'تقديم تجربة مستخدم استثنائية تعكس الاحترافية الهندسية وأعلى معايير جودة الواجهات.',
          'ضمان أمان الأنواع البرمجية Type Safety لجميع المسارات ومعاملات البحث.',
          'تدويل ثنائي الاتجاه كامل (عربي RTL وإنجليزي LTR) مع قواميس مجمعة سريعة.',
          'إلغاء الاعتماد على شبكات الخطوط الخارجية وتضمين خطوط Cairo و Inter محلياً.',
        ],
        architectureDecisions: [
          {
            decision: 'Zustand مقابل Redux Toolkit لإدارة حالة الواجهة',
            rationale:
              'توفر Zustand حجماً خفيفاً جداً بدون تعقيد Redux المعتاد، مع محددات أداء دقيقة وحفظ تلقائي في LocalStorage دون تكرار تقديم المكونات.',
          },
          {
            decision: 'TanStack Router مع مسارات مبنية على الملفات',
            rationale:
              'تضمن التحقق الصارم من صحة المعاملات وروابط التنقل وتقسيم الكود تلقائياً لمنع أي أخطاء 404 أثناء التشغيل.',
          },
          {
            decision: 'مكونات Radix UI المجردة مع Tailwind CSS',
            rationale:
              'تمنح توافقاً معيارياً كاملاً مع متطلبات الوصولية ARIA مع حرية تامة في تصميم المظهر دون التقيد بمكتبات مكونات مسبقة التصميم.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'تنظيم الاتجاه المزدوج (LTR/RTL) وتبديل الخطوط اللحظي',
            solution:
              'بناء آلية متزامنة لتبديل سمات html اللغوية وخصائص الخطوط المتغيرة لتفعيل خط Cairo للغة العربية و Inter للإنجليزية دون وميض أو انزياح تخطيطي.',
          },
          {
            challenge: 'تجميع قواميس الترجمة بدون استهلاك وقت التشغيل',
            solution:
              'تجميع قواميس Lingui مسبقاً في ملفات محسنة لإلغاء أي معالجة إضافية في المتصفح.',
          },
        ],
      },
    },
    {
      id: 'restaurant-orders-redux',
      title: 'نظام طلبات المطاعم مع سلة شراء وفلترة متقدمة',
      subtitle: 'معمارية React.js & Redux Toolkit',
      summary:
        'مشروع تطبيقي تأسيسي لإتقان إدارة الحالة العامة المتوقعة عبر Redux Toolkit، وحساب تكاليف السلة اللحظية، والفلترة متعددة المعايير.',
      description:
        'تطبيق تفاعلي لإدارة قائمة وطلبات المطاعم مبني باستخدام React.js و Redux Toolkit. يتيح فلترة فورية للأطباق حسب الفئات، والبحث اللحظي، والحساب التلقائي لإجمالي الطلب، وتخطيطاً متجاوباً للأجهزة المحمولة والحواسيب.',
      category: 'مشروع تأسيسي',
      technologies: ['React.js', 'Redux Toolkit', 'JavaScript', 'CSS3'],
      githubUrl: 'https://github.com/engineerEbraheem/menu_ProjectRedux',
      demoUrl: 'https://menu-project-redux.vercel.app/',
      highlights: [
        'إدارة حالة مركزية عبر Redux Toolkit لتحديث محتويات السلة وحساب الإجماليات بدقة وفورية.',
        'فلترة عالية الأداء للأصناف وفهرسة البحث الفوري للاسترجاع المباشر.',
        'تخطيط متجاوب مصمم للهواتف المحمولة أولاً مع تجربة مستخدم سلسة لإتمام الطلب.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'واجهة طلبات تفاعلية تم تطويرها لحل معالجة طلبات العملاء وحساب الأسعار في طرف العميل مع البحث المتقدم.',
        objectives: [
          'تطبيق تدفق البيانات أحادي الاتجاه بدقة عبر مقاطع Redux Toolkit.',
          'تقديم فلترة فورية وحساب تلقائي لأسعار المنتجات والخصومات.',
          'تصميم واجهة متجاوبة ومريحة وسهلة الاستخدام للمستخدمين.',
        ],
        architectureDecisions: [
          {
            decision: 'معمارية مقاطع Redux Toolkit (Slices)',
            rationale:
              'استخدام createSlice لتنظيم وتجميع منطق المحدثات والإجراءات الخاصة بالسلة مع الحفاظ التام على مناعة البيانات عبر Immer.',
          },
          {
            decision: 'فصل المكونات العرضية عن المنطق',
            rationale:
              'تقسيم الواجهة إلى بطاقات أطباق مستقلة، ورقائق فلترة، ولوحة ملخص السلة لتحقيق أقصى قدر من إعادة الاستخدام ونظافة الكود.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'مزامنة السلة وحساب الأسعار اللحظي',
            solution:
              'استخدام محددات memoized لحساب المجاميع الفرعية والإجمالية مباشرة عند أي تعديل دون إعادة عرض المكونات غير المعنية.',
          },
          {
            challenge: 'معالجة الفلترة المزدوجة مع البحث',
            solution:
              'بناء مسار فلترة موحد يدمج بين اختيار التصنيف والكلمات المفتاحية للبحث بدقة وسرعة عالية.',
          },
        ],
      },
    },
    {
      id: 'movie-display-redux',
      title: 'منصة عرض وبحث الأفلام السينمائية',
      subtitle: 'محرك تصفح الأفلام بـ React & Redux Toolkit',
      summary:
        'مشروع تدريبي مبكر ركّز على استهلاك واجهات برمجة التطبيقات (REST APIs)، ومزامنة طلبات البحث، وتدفقات بيانات Redux.',
      description:
        'تطبيق تصفح وبحث في كتالوج الأفلام السينمائية يعرض أحدث الإصدارات مع إمكانية البحث المباشر، والتقسيم لصفحات، ونوافذ معاينة التفاصيل، والتعامل الآمن مع الحالة عبر Redux Toolkit.',
      category: 'مشروع تأسيسي',
      technologies: ['React.js', 'Redux Toolkit', 'REST API', 'JavaScript'],
      githubUrl: 'https://github.com/engineerEbraheem/movies_ProjectRedux',
      demoUrl: 'https://movies-project-redux.vercel.app/',
      highlights: [
        'تأخير إرسال استعلامات البحث (Debounce) لمنع إرهاق الخادم وتحديث حالة Redux بسلاسة.',
        'شبكة وسائط متجاوبة مع مؤشرات التقييم وعرض تفاصيل الفيلم في نوافذ منبثقة.',
        'معمارية مكونات نمطية قابلة لإعادة الاستخدام مع معالجة شاملة لأخطاء الشبكة.',
      ],
      featured: true,
      caseStudy: {
        overview:
          'تطبيق لاكتشاف الأفلام السينمائية تم تطويره للتدرب على استهلاك واجهات REST API والبحث اللحظي وإدارة دورة حياة الطلبات.',
        objectives: [
          'استهلاك واجهات أفلام خارجية مع إشارات التحميل ومعالجة الأخطاء.',
          'تفعيل البحث اللحظي مع تقنية Debounce لتفادي الطلبات الشبكية المتكررة.',
          'بناء نافذة تفاصيل منبثقة متجاوبة لعرض بطاقة الفيلم والتقييمات.',
        ],
        architectureDecisions: [
          {
            decision: 'إدارة الطلبات اللاتزامنية عبر createAsyncThunk',
            rationale:
              'توحيد حالات التحميل والنجاح والفشل وتزويد المستخدم بمؤشرات تفاعلية واضحة خلال انتظار الاستجابة.',
          },
          {
            decision: 'تجريد عميل Axios',
            rationale:
              'إعداد عميل Axios مركزي يحتوي على الروابط ومفاتيح الوصول ومعالجات الأخطاء الموحدة.',
          },
        ],
        challengesSolved: [
          {
            challenge: 'سباق الطلبات غير المتزامنة وتأخير البحث (Debounce)',
            solution:
              'تطبيق إلغاء الطلبات القديمة مع تقنية Debounce لضمان أن نتائج البحث الأحدث هي فقط التي تعرض على الشاشة.',
          },
          {
            challenge: 'أداء عرض شبكة صور الملصقات السينمائية',
            solution:
              'تحسين نسب أبعاد الصور وتخفيف عبء النوافذ المنبثقة لضمان تصفح سلس عبر مختلف مقاسات الشاشات.',
          },
        ],
      },
    },
  ],
}
