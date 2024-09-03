const translation = {
  pageTitle: {
    line1: 'پرومپت',
    line2: 'مهندسی',
  },
  orchestrate: 'هماهنگ کردن',
  promptMode: {
    simple: 'برای ویرایش کل پرومپت به حالت کارشناس بروید',
    advanced: 'حالت کارشناس',
    switchBack: 'بازگشت',
    advancedWarning: {
      title: 'شما به حالت کارشناس رفته‌اید، و پس از تغییر پرومپت، نمی‌توانید به حالت ساده برگردید.',
      description: 'در حالت کارشناس، می‌توانید کل پرومپت را ویرایش کنید.',
      learnMore: 'بیشتر بدانید',
      ok: 'باشه',
    },
    operation: {
      addMessage: 'اضافه کردن پیام',
    },
    contextMissing: 'مولفه زمینه‌ای از دست رفته است، اثر بخشی پرومپت ممکن است خوب نباشد.',
  },
  operation: {
    applyConfig: 'انتشار',
    resetConfig: 'تنظیم مجدد',
    debugConfig: 'دیباگ',
    addFeature: 'اضافه کردن ویژگی',
    automatic: 'تولید کردن',
    stopResponding: 'توقف پاسخ‌دهی',
    agree: 'پسندیدن',
    disagree: 'نپسندیدن',
    cancelAgree: 'لغو پسندیدن',
    cancelDisagree: 'لغو نپسندیدن',
    userAction: 'عمل کاربر',
  },
  notSetAPIKey: {
    title: 'کلید ارائه‌دهنده LLM تنظیم نشده است',
    trailFinished: 'آزمایش تمام شد',
    description: 'کلید ارائه‌دهنده LLM تنظیم نشده است و باید قبل از دیباگ تنظیم شود.',
    settingBtn: 'به تنظیمات بروید',
  },
  trailUseGPT4Info: {
    title: 'در حال حاضر پشتیبانی نمی‌شود gpt-4',
    description: 'برای استفاده از gpt-4، لطفاً کلید API را تنظیم کنید.',
  },
  feature: {
    groupChat: {
      title: 'تقویت گفتگو',
      description: 'افزودن تنظیمات پیش از گفتگو برای برنامه‌ها می‌تواند تجربه کاربری را بهبود بخشد.',
    },
    groupExperience: {
      title: 'تقویت تجربه',
    },
    conversationOpener: {
      title: 'شروع‌کننده گفتگو',
      description: 'در یک برنامه چت، اولین جمله‌ای که AI فعالانه با کاربر صحبت می‌کند، معمولاً به عنوان خوشامدگویی استفاده می‌شود.',
    },
    suggestedQuestionsAfterAnswer: {
      title: 'پیگیری',
      description: 'تنظیم پیشنهاد سوالات بعدی می‌تواند به کاربران یک چت بهتر ارائه دهد.',
      resDes: '3 پیشنهاد برای سوال بعدی کاربر.',
      tryToAsk: 'سعی کنید بپرسید',
    },
    moreLikeThis: {
      title: 'بیشتر از این',
      description: 'تولید چندین متن به طور همزمان، و سپس ویرایش و ادامه تولید',
      generateNumTip: 'تعداد تولید هر بار',
      tip: 'استفاده از این ویژگی هزینه‌های اضافی توکن‌ها را به همراه دارد',
    },
    speechToText: {
      title: 'تبدیل گفتار به متن',
      description: 'پس از فعال شدن، می‌توانید از ورودی صوتی استفاده کنید.',
      resDes: 'ورودی صوتی فعال شده است',
    },
    textToSpeech: {
      title: 'تبدیل متن به گفتار',
      description: 'پس از فعال شدن، متن می‌تواند به گفتار تبدیل شود.',
      resDes: 'تبدیل متن به صدا فعال شده است',
    },
    citation: {
      title: 'ارجاعات و استنادات',
      description: 'پس از فعال شدن، سند منبع و بخش استناد شده از محتوای تولید شده را نشان می‌دهد.',
      resDes: 'ارجاعات و استنادات فعال شده است',
    },
    annotation: {
      title: 'پاسخ حاشیه‌نویسی',
      description: 'می‌توانید پاسخ‌های با کیفیت بالا را به صورت دستی به حافظه کش اضافه کنید تا با سوالات مشابه کاربران تطبیق یابد.',
      resDes: 'پاسخ حاشیه‌نویسی فعال شده است',
      scoreThreshold: {
        title: 'آستانه امتیاز',
        description: 'Used to set the similarity threshold for annotation reply.',
        easyMatch: 'تطابق آسان',
        accurateMatch: 'تطابق دقیق',
      },
      matchVariable: {
        title: 'تغییر متغیر',
        choosePlaceholder: 'انتخاب متغیر تغییر',
      },
      cacheManagement: 'حاشیه نویسی',
      cached: 'حاشیه نویسی شده',
      remove: 'حذف',
      removeConfirm: 'این حاشیه نویسی را حذف کنید؟',
      add: 'افزودن حاشیه نویسی',
      edit: 'ویرایش حاشیه نویسی',
    },
    dataSet: {
      title: 'زمینه',
      noData: 'شما می‌توانید دانش را به عنوان زمینه وارد کنید',
      words: 'کلمات',
      textBlocks: 'بلوک‌های متن',
      selectTitle: 'انتخاب دانش مرجع',
      selected: 'دانش انتخاب شده',
      noDataSet: 'هیچ دانشی یافت نشد',
      toCreate: 'برای ایجاد بروید',
      notSupportSelectMulti: 'در حال حاضر فقط یک دانش پشتیبانی می‌شود',
      queryVariable: {
        title: 'متغیر پرس و جو',
        tip: 'این متغیر به عنوان ورودی پرس و جو برای بازیابی زمینه استفاده خواهد شد و اطلاعات زمینه مرتبط با ورودی این متغیر را به دست می‌آورد.',
        choosePlaceholder: 'انتخاب متغیر پرس و جو',
        noVar: 'بدون متغیر',
        noVarTip: 'لطفاً متغیری را در بخش متغیرها ایجاد کنید',
        unableToQueryDataSet: 'عدم امکان پرس و جو از دانش',
        unableToQueryDataSetTip: 'پرس و جوی موفقیت آمیز دانش ممکن نیست، لطفاً یک متغیر پرس و جو زمینه را در بخش زمینه انتخاب کنید.',
        ok: 'باشه',
        contextVarNotEmpty: 'متغیر پرس و جو زمینه نمی‌تواند خالی باشد',
        deleteContextVarTitle: 'متغیر "{{varName}}" را حذف کنید؟',
        deleteContextVarTip: 'این متغیر به عنوان متغیر پرس و جو زمینه تنظیم شده است و حذف آن بر استفاده عادی از دانش تأثیر می‌گذارد. اگر هنوز نیاز به حذف دارید، لطفاً آن را در بخش زمینه دوباره انتخاب کنید.',
      },
    },
    tools: {
      title: 'ابزارها',
      tips: 'ابزارها یک روش استاندارد برای فراخوانی API فراهم می‌کنند و ورودی کاربر یا متغیرها را به عنوان پارامترهای درخواست برای پرس و جو داده‌های خارجی به عنوان زمینه می‌گیرند.',
      toolsInUse: '{{count}} ابزار در حال استفاده',
      modal: {
        title: 'ابزار',
        toolType: {
          title: 'نوع ابزار',
          placeholder: 'لطفاً نوع ابزار را انتخاب کنید',
        },
        name: {
          title: 'نام',
          placeholder: 'لطفاً نام را وارد کنید',
        },
        variableName: {
          title: 'نام متغیر',
          placeholder: 'لطفاً نام متغیر را وارد کنید',
        },
      },
    },
    conversationHistory: {
      title: 'تاریخچه مکالمه',
      description: 'تنظیم پیشوند نام‌ها برای نقش‌های مکالمه',
      tip: 'تاریخچه مکالمه فعال نشده است، لطفاً <histories> را در فراخوانی بالا اضافه کنید.',
      learnMore: 'بیشتر بدانید',
      editModal: {
        title: 'ویرایش نام نقش‌های مکالمه',
        userPrefix: 'پیشوند کاربر',
        assistantPrefix: 'پیشوند دستیار',
      },
    },
    toolbox: {
      title: 'جعبه ابزار',
    },
    moderation: {
      title: 'مدیریت محتوا',
      description: 'خروجی مدل را با استفاده از API مدیریت یا نگهداری فهرست کلمات حساس امن کنید.',
      allEnabled: 'محتوای ورودی/خروجی فعال شده',
      inputEnabled: 'محتوای ورودی فعال شده',
      outputEnabled: 'محتوای خروجی فعال شده',
      modal: {
        title: 'تنظیمات مدیریت محتوا',
        provider: {
          title: 'ارائه دهنده',
          openai: 'مدیریت OpenAI',
          openaiTip: {
            prefix: 'مدیریت OpenAI نیاز به کلید API OpenAI دارد که در ',
            suffix: ' تنظیم شده باشد.',
          },
          keywords: 'کلمات کلیدی',
        },
        keywords: {
          tip: 'هر خط یک کلمه، با شکست خطوط جدا شده. حداکثر 100 کاراکتر در هر خط.',
          placeholder: 'هر خط یک کلمه، با شکست خطوط جدا شده',
          line: 'خط',
        },
        content: {
          input: 'مدیریت محتوای ورودی',
          output: 'مدیریت محتوای خروجی',
          preset: 'پاسخ‌های پیش فرض',
          placeholder: 'محتوای پاسخ‌های پیش فرض در اینجا',
          condition: 'مدیریت محتوای ورودی و خروجی حداقل یک مورد فعال شده است',
          fromApi: 'پاسخ‌های پیش فرض از API برگردانده می‌شود',
          errorMessage: 'پاسخ‌های پیش فرض نمی‌تواند خالی باشد',
          supportMarkdown: 'پشتیبانی از Markdown',
        },
        openaiNotConfig: {
          before: 'مدیریت OpenAI نیاز به کلید API OpenAI دارد که در',
          after: '',
        },
      },
    },
    generate: {
      title: 'تولید کننده دستورالعمل',
      description: 'تولید کننده دستورالعمل از مدل تنظیم شده برای بهینه سازی دستورالعمل‌ها برای کیفیت بالاتر و ساختار بهتر استفاده می‌کند. لطفاً دستورالعمل‌های واضح و دقیقی بنویسید.',
      tryIt: 'امتحان کنید',
      instruction: 'دستورالعمل‌ها',
      instructionPlaceHolder: 'دستورالعمل‌های واضح و خاصی بنویسید.',
      generate: 'تولید',
      resTitle: 'دستورالعمل تولید شده',
      noDataLine1: 'موارد استفاده خود را در سمت چپ توصیف کنید،',
      noDataLine2: 'پیش‌نمایش ارکستراسیون در اینجا نشان داده خواهد شد.',
      apply: 'اعمال',
      loading: 'در حال ارکستراسیون برنامه برای شما...',
      overwriteTitle: 'آیا تنظیمات موجود را لغو می‌کنید؟',
      overwriteMessage: 'اعمال این دستورالعمل تنظیمات موجود را لغو خواهد کرد.',
      template: {
        pythonDebugger: {
          name: 'اشکال‌زدای پایتون',
          instruction: 'یک بات که می‌تواند بر اساس دستورالعمل شما کد تولید و اشکال‌زدایی کند',
        },
        translation: {
          name: 'ترجمه',
          instruction: 'یک مترجم که می‌تواند چندین زبان را ترجمه کند',
        },
        professionalAnalyst: {
          name: 'تحلیلگر حرفه‌ای',
          instruction: 'استخراج بینش‌ها، شناسایی ریسک و خلاصه‌سازی اطلاعات کلیدی از گزارش‌های طولانی به یک یادداشت کوتاه',
        },
        excelFormulaExpert: {
          name: 'کارشناس فرمول اکسل',
          instruction: 'یک چت‌بات که می‌تواند به کاربران مبتدی کمک کند فرمول‌های اکسل را بر اساس دستورالعمل‌های کاربر درک، استفاده و ایجاد کنند',
        },
        travelPlanning: {
          name: 'برنامه‌ریزی سفر',
          instruction: 'دستیار برنامه‌ریزی سفر یک ابزار هوشمند است که به کاربران کمک می‌کند سفرهای خود را به راحتی برنامه‌ریزی کنند',
        },
        SQLSorcerer: {
          name: 'جادوگر SQL',
          instruction: 'تبدیل زبان روزمره به پرس و جوهای SQL',
        },
        GitGud: {
          name: 'Git gud',
          instruction: 'تولید دستورات مناسب Git بر اساس اقدامات توصیف شده توسط کاربر در کنترل نسخه',
        },
        meetingTakeaways: {
          name: 'نتایج جلسات',
          instruction: 'خلاصه‌سازی جلسات به صورت مختصر شامل موضوعات بحث، نکات کلیدی و موارد اقدام',
        },
        writingsPolisher: {
          name: 'پولیش‌گر نوشته‌ها',
          instruction: 'استفاده از تکنیک‌های ویرایش پیشرفته برای بهبود نوشته‌های شما',
        },
      },
    },
    resetConfig: {
      title: 'بازنشانی تأیید می‌شود؟',
      message: 'بازنشانی تغییرات را لغو کرده و تنظیمات منتشر شده آخر را بازیابی می‌کند.',
    },
    errorMessage: {
      nameOfKeyRequired: 'نام کلید: {{key}} مورد نیاز است',
      valueOfVarRequired: 'مقدار {{key}} نمی‌تواند خالی باشد',
      queryRequired: 'متن درخواست مورد نیاز است.',
      waitForResponse: 'لطفاً منتظر پاسخ به پیام قبلی بمانید.',
      waitForBatchResponse: 'لطفاً منتظر پاسخ به کار دسته‌ای بمانید.',
      notSelectModel: 'لطفاً یک مدل را انتخاب کنید',
      waitForImgUpload: 'لطفاً منتظر بارگذاری تصویر بمانید',
    },
    chatSubTitle: 'دستورالعمل‌ها',
    completionSubTitle: 'پیشوند پرس و جو',
    promptTip: 'دستورالعمل‌ها و محدودیت‌ها پاسخ‌های AI را هدایت می‌کنند. متغیرهایی مانند {{input}} را درج کنید. این دستورالعمل برای کاربران قابل مشاهده نخواهد بود.',
    formattingChangedTitle: 'قالب‌بندی تغییر کرد',
    formattingChangedText: 'تغییر قالب‌بندی منطقه اشکال‌زدایی را بازنشانی خواهد کرد، آیا مطمئن هستید؟',
    variableTitle: 'متغیرها',
    variableTip: 'کاربران متغیرها را در فرم پر می‌کنند و به طور خودکار متغیرها را در دستورالعمل‌ها جایگزین می‌کنند.',
    notSetVar: 'متغیرها به کاربران اجازه می‌دهند که کلمات پرس و جو یا جملات ابتدایی را هنگام پر کردن فرم معرفی کنند. شما می‌توانید سعی کنید "{{input}}" را در کلمات پرس و جو وارد کنید.',
    autoAddVar: 'متغیرهای تعریف نشده‌ای که در پیش‌پرسش ذکر شده‌اند، آیا می‌خواهید آنها را به فرم ورودی کاربر اضافه کنید؟',
    variableTable: {
      key: 'کلید متغیر',
      name: 'نام فیلد ورودی کاربر',
      optional: 'اختیاری',
      type: 'نوع ورودی',
      action: 'اقدامات',
      typeString: 'رشته',
      typeSelect: 'انتخاب',
    },
    varKeyError: {
      canNoBeEmpty: '{{key}} مطلوب',
      tooLong: '{{key}} طولانی است. نمی‌تواند بیش از 30 کاراکتر باشد',
      notValid: '{{key}} نامعتبر است. فقط می‌تواند شامل حروف، اعداد و زیرخط باشد',
      notStartWithNumber: '{{key}} نمی‌تواند با عدد شروع شود',
      keyAlreadyExists: '{{key}} از قبل وجود دارد',
    },
    otherError: {
      promptNoBeEmpty: 'پرس و جو نمی‌تواند خالی باشد',
      historyNoBeEmpty: 'تاریخچه مکالمه باید در پرس و جو تنظیم شود',
      queryNoBeEmpty: 'پرس و جو باید در پرس و جو تنظیم شود',
    },
    variableConig: {
      'addModalTitle': 'افزودن فیلد ورودی',
      'editModalTitle': 'ویرایش فیلد ورودی',
      'description': 'تنظیم برای متغیر {{varName}}',
      'fieldType': 'نوع فیلد',
      'string': 'متن کوتاه',
      'text-input': 'متن کوتاه',
      'paragraph': 'پاراگراف',
      'select': 'انتخاب',
      'number': 'عدد',
      'notSet': 'تنظیم نشده، سعی کنید {{input}} را در پرس و جو وارد کنید',
      'stringTitle': 'گزینه‌های جعبه متن فرم',
      'maxLength': 'حداکثر طول',
      'options': 'گزینه‌ها',
      'addOption': 'افزودن گزینه',
      'apiBasedVar': 'متغیر مبتنی بر API',
      'varName': 'نام متغیر',
      'labelName': 'نام برچسب',
      'inputPlaceholder': 'لطفاً وارد کنید',
      'content': 'محتوا',
      'required': 'مورد نیاز',
      'errorMsg': {
        varNameRequired: 'نام متغیر مورد نیاز است',
        labelNameRequired: 'نام برچسب مورد نیاز است',
        varNameCanBeRepeat: 'نام متغیر نمی‌تواند تکراری باشد',
        atLeastOneOption: 'حداقل یک گزینه مورد نیاز است',
        optionRepeat: 'گزینه‌های تکراری وجود دارد',
      },
    },
    vision: {
      name: 'بینایی',
      description: 'فعال کردن بینایی به مدل اجازه می‌دهد تصاویر را دریافت کند و به سوالات مربوط به آنها پاسخ دهد.',
      settings: 'تنظیمات',
      visionSettings: {
        title: 'تنظیمات بینایی',
        resolution: 'وضوح',
        resolutionTooltip: `وضوح پایین به مدل اجازه می‌دهد نسخه 512x512 کم‌وضوح تصویر را دریافت کند و تصویر را با بودجه 65 توکن نمایش دهد. این به API اجازه می‌دهد پاسخ‌های سریع‌تری بدهد و توکن‌های ورودی کمتری برای موارد استفاده که نیاز به جزئیات بالا ندارند مصرف کند.
          \n
          وضوح بالا ابتدا به مدل اجازه می‌دهد تصویر کم‌وضوح را ببیند و سپس قطعات جزئیات تصویر ورودی را به عنوان مربع‌های 512px ایجاد کند. هر کدام از قطعات جزئیات از بودجه توکن دو برابر استفاده می‌کنند که در مجموع 129 توکن است.`,
        high: 'بالا',
        low: 'پایین',
        uploadMethod: 'روش بارگذاری',
        both: 'هر دو',
        localUpload: 'بارگذاری محلی',
        url: 'URL',
        uploadLimit: 'محدودیت بارگذاری',
      },
    },
    voice: {
      name: 'صدا',
      defaultDisplay: 'صدا پیش فرض',
      description: 'تنظیمات تبدیل متن به گفتار',
      settings: 'تنظیمات',
      voiceSettings: {
        title: 'تنظیمات صدا',
        language: 'زبان',
        resolutionTooltip: 'پشتیبانی از زبان صدای تبدیل متن به گفتار.',
        voice: 'صدا',
        autoPlay: 'پخش خودکار',
        autoPlayEnabled: 'روشن کردن',
        autoPlayDisabled: 'خاموش کردن',
      },
    },
    openingStatement: {
      title: 'شروع مکالمه',
      add: 'افزودن',
      writeOpener: 'نوشتن آغازگر',
      placeholder: 'پیام آغازگر خود را اینجا بنویسید، می‌توانید از متغیرها استفاده کنید، سعی کنید {{variable}} را تایپ کنید.',
      openingQuestion: 'سوالات آغازین',
      noDataPlaceHolder: 'شروع مکالمه با کاربر می‌تواند به AI کمک کند تا ارتباط نزدیک‌تری با آنها برقرار کند.',
      varTip: 'می‌توانید از متغیرها استفاده کنید، سعی کنید {{variable}} را تایپ کنید',
      tooShort: 'حداقل 20 کلمه از پرسش اولیه برای تولید نظرات آغازین مکالمه مورد نیاز است.',
      notIncludeKey: 'پرسش اولیه شامل متغیر: {{key}} نمی‌شود. لطفاً آن را به پرسش اولیه اضافه کنید.',
    },
    modelConfig: {
      model: 'مدل',
      setTone: 'تنظیم لحن پاسخ‌ها',
      title: 'مدل و پارامترها',
      modeType: {
        chat: 'چت',
        completion: 'تکمیل',
      },
    },
    inputs: {
      title: 'اشکال‌زدایی و پیش‌نمایش',
      noPrompt: 'سعی کنید پرسش‌هایی را در ورودی پیش‌پرسش بنویسید',
      userInputField: 'فیلد ورودی کاربر',
      noVar: 'مقدار متغیر را پر کنید، که به طور خودکار در کلمات پرس و جو در هر بار شروع یک جلسه جدید جایگزین می‌شود.',
      chatVarTip: 'مقدار متغیر را پر کنید، که به طور خودکار در کلمات پرس و جو در هر بار شروع یک جلسه جدید جایگزین می‌شود',
      completionVarTip: 'مقدار متغیر را پر کنید، که به طور خودکار در کلمات پرس و جو در هر بار ارسال سوال جایگزین می‌شود.',
      previewTitle: 'پیش‌نمایش پرس و جو',
      queryTitle: 'محتوای پرس و جو',
      queryPlaceholder: 'لطفاً متن درخواست را وارد کنید.',
      run: 'اجرا',
    },
    result: 'متن خروجی',
    datasetConfig: {
      settingTitle: 'تنظیمات بازیابی',
      knowledgeTip: 'روی دکمه "+" کلیک کنید تا دانش اضافه شود',
      retrieveOneWay: {
        title: 'بازیابی N به 1',
        description: 'بر اساس نیت کاربر و توصیفات دانش، عامل بهترین دانش را برای پرس و جو به طور خودکار انتخاب می‌کند. بهترین برای برنامه‌هایی با دانش محدود و مشخص.',
      },
      retrieveMultiWay: {
        title: 'بازیابی چند مسیره',
        description: 'بر اساس نیت کاربر، از تمام دانش پرس و جو می‌کند، متن‌های مرتبط از منابع چندگانه بازیابی می‌کند و بهترین نتایج مطابقت با پرس و جوی کاربر را پس از مرتب‌سازی مجدد انتخاب می‌کند.',
      },
      rerankModelRequired: 'مدل مرتب‌سازی مجدد مورد نیاز است',
      params: 'پارامترها',
      top_k: 'Top K',
      top_kTip: 'برای فیلتر کردن تکه‌هایی که بیشترین شباهت به سوالات کاربر دارند استفاده می‌شود. سیستم همچنین به طور دینامیک مقدار Top K را بر اساس max_tokens مدل انتخاب شده تنظیم می‌کند.',
      score_threshold: 'آستانه نمره',
      score_thresholdTip: 'برای تنظیم آستانه شباهت برای فیلتر کردن تکه‌ها استفاده می‌شود.',
      retrieveChangeTip: 'تغییر حالت شاخص و حالت بازیابی ممکن است بر برنامه‌های مرتبط با این دانش تأثیر بگذارد.',
    },
    debugAsSingleModel: 'اشکال‌زدایی به عنوان مدل تک',
    debugAsMultipleModel: 'اشکال‌زدایی به عنوان مدل چندگانه',
    duplicateModel: 'تکراری',
    publishAs: 'انتشار به عنوان',
    assistantType: {
      name: 'نوع دستیار',
      chatAssistant: {
        name: 'دستیار پایه',
        description: 'ساخت دستیار مبتنی بر چت با استفاده از مدل زبان بزرگ',
      },
      agentAssistant: {
        name: 'دستیار عامل',
        description: 'ساخت یک عامل هوشمند که می‌تواند ابزارها را به طور خودکار برای تکمیل وظایف انتخاب کند',
      },
    },
    agent: {
      agentMode: 'حالت عامل',
      agentModeDes: 'تنظیم نوع حالت استنتاج برای عامل',
      agentModeType: {
        ReACT: 'ReAct',
        functionCall: 'فراخوانی تابع',
      },
      setting: {
        name: 'تنظیمات عامل',
        description: 'تنظیمات دستیار عامل به شما اجازه می‌دهد حالت عامل و ویژگی‌های پیشرفته مانند پرسش‌های ساخته شده را تنظیم کنید، فقط در نوع عامل موجود است.',
        maximumIterations: {
          name: 'حداکثر تکرارها',
          description: 'محدود کردن تعداد تکرارهایی که دستیار عامل می‌تواند اجرا کند',
        },
      },
      buildInPrompt: 'پرسش‌های ساخته شده',
      firstPrompt: 'اولین پرسش',
      nextIteration: 'تکرار بعدی',
      promptPlaceholder: 'پرسش خود را اینجا بنویسید',
      tools: {
        name: 'ابزارها',
        description: 'استفاده از ابزارها می‌تواند قابلیت‌های LLM را گسترش دهد، مانند جستجو در اینترنت یا انجام محاسبات علمی',
        enabled: 'فعال',
      },
    },
  },
}

export default translation