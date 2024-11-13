// Create 


// Singleton getMethod 1 example obyect bolishi kere
const instance1 = {
    "name": "instance1",
}

const instance2 =  {
    "name": "instance2",
}

// instance1 == instance2 // false

// Factory method bitta class yaratip beradi oop tilda oshlaganimiza uchun uni biza ishlatishimiz uchun kere 

class Notification {
    send(message) {
      throw new Error("Метод send должен быть реализован");
    }
  }
  
  // Класс EmailNotification, наследуется от Notification
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Отправка Email с сообщением: ${message}`);
    }
  }

class FactoryMethods  { 
    create(type) {
        if(type == "Метод send должен быть реализован") {
            return new Notification(type);
        }else {
            return new EmailNotification(type);
        }
    }
}


//  Abstract factory bi bizaga bir necha factorlani birlashtirip beradi 


class Notification {
    send(message) {
      throw new Error("Метод send должен быть реализован");
    }
  }
  
  // Класс EmailNotification, наследуется от Notification
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Отправка Email с сообщением: ${message}`);
    }
  }

class FactoryMethods  { 
    create(type) {
       return EmailNotification == "Otpravit" ? Notification : EmailNotification
    }
}


// PROTOTYPE    OBYECTI CLONINI YARATIP BERADI I UNI OZGARTIRAS BOLADI 
// bota clone bovoti bota produce digan methods bor u bizaga clone qibervoti 

class TeslaCar {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    produce() {
        return new TeslaCar(this.model,this.year)
    }
}





// BUILDER bita oybect yeg'ip beradi 

class CarBuilder {
   constructor() {
    this.car = new Car()
   }
   autoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
   }
   addParktroin(addParktroin) {
    this.car.addParktroin = addParktroin;
    return this;
   }
   build() {
    return this.car;
   }
}

const myCar = new CarBuilder().addParktroin(true).addParktroin(true).build()


// Decarator obyecti ozgartirsa boladi qoshimcha narsa qoshisa boladi 

// Базовый класс для уведомлений
class Notifier {
    send(message) {
      throw new Error("Метод send должен быть реализован");
    }
  }
  
  // Базовый класс, реализующий интерфейс Notifier
  class BasicNotifier extends Notifier {
    send(message) {
      console.log(`Базовое уведомление: ${message}`);
    }
  }
  
  // Декоратор для отправки Email
  class EmailNotifier extends Notifier {
    constructor(notifier) {
      super();
      this.notifier = notifier;
    }
  
    send(message) {
      this.notifier.send(message);
      this.sendEmail(message);
    }
  
    sendEmail(message) {
      console.log(`Отправка Email уведомления: ${message}`);
    }
  }
  
  // Декоратор для отправки SMS
  class SMSNotifier extends Notifier {
    constructor(notifier) {
      super();
      this.notifier = notifier;
    }
  
    send(message) {
      this.notifier.send(message);
      this.sendSMS(message);
    }
  
    sendSMS(message) {
      console.log(`Отправка SMS уведомления: ${message}`);
    }
  }
  
  // Пример использования
  let notifier = new BasicNotifier();
  notifier = new EmailNotifier(notifier); // Добавляем функциональность отправки Email
  notifier = new SMSNotifier(notifier);   // Добавляем функциональность отправки SMS
  
  notifier.send("У вас новое сообщение!");

  


//   Facade bizaga qiyin yoligakni ozini ichida bekitip beradi 




// Proxy bu bizaga originial obyecti olip clon obyekt bilan ishlaga yordam beradi 




// 1.Singleton bu bizaga class orqali obyect yaratishga 
// 2. Factory bu bizga bir bir necha kodi qisqartirishga ishlatilinadi 
// 3. Abstract Factory bu bizaga bir necha  factoriylani birlashtirip beradi 
// 4. PROTOTYPE bu bizaga example obyektimizani clone qilip beradi i u obyekti ozgartirsa boladi 
// 5. BUILDER bita classi ichiga pattrentlani yeg'ip beradi 
// 6.Dacade qiyin logikani ozini ichida bekitip beradi kak servisga oxshap serversga kod yozgandan keyin uni routerga ulanadi 
// 7. Proxy bu bizaga originial obyecti olip clon obyekt bilan ishlaga yordam beradi misol password(hash) JWT 
// 8.Adapter bu bizaga birinchi obyekti ozgartirip ikkinchi obyecti malumotlarini save qilip beradi
// 9. Composite bu bizaga bir necha obyectlani bita classi ichiga tiqip beradi kak useContext global 
// 10. Bridge bu bizani classimizani 2 xilga boladi 1chisi abstraksiya 2 chisi realizatsiya bota biza bir biriga halaqit bermastan update qilolimiza
// 11.Flywight bota biza obyectlada birxil malumot bosa oshani bitada save mas bita pattrent sozdat qilip obyectga bervorganimiza yaxshi chunki obyeclayam joy oladi oshani kamaytirish uchun shu pattrnt ishlatilinadi 
// 12.Mediator bu bizaga hama class pattrent lani yeg'ip beradi i biza ota nima qise boladi biza ota qaysindan keyin qaysi ishlatishiniyam bervorse boladi 
// 13. Iterator buni 3 ta funksiyasi bor first(),next(),current() next bu bizaga bizaga elementi keyinigisini chiqariadi, first() - elementi birinchisini chiqaradi, current() 
// 14.Chain of Responsibility bu switch keysga oxshap ishlap beradi misol tolov xizmatida biza clickmi,paymimi,yoki uzumi oshani talimizaku oshani chain of Resposibility ga kiriadi 
// 15.Strategy bita context class boladi uni ichida yasalgan funksiyani kop joyda ozgartirip ishlatish misol eccomersta skidka
// 16.Memento bu bizaga obyectimizani malumoti ozgarip ketsayam uni qaytarsa boladi u mementoda save boladi 
// 17. Template Methods bu bizaga algaritimga tog'ilash uchun kere i qadam qadam orqali allgoritimi yeg'ishga kere 
// 18. Visitor classimizga yengi funksiyanal qoship berolidi kodi ozgartirmastan 
// 19. Command komandalar funksiyalari class orqali yaratish 
// 20.Obsver bu nimadur ozgarishi kutip turadi i keyin u save qiladi statga oxshap ishlap beradi 
// 21.State (holat) — bu dizayn patterndan biri bo‘lib, obyektning ichki holatini boshqarishga imkon beradi, holatga qarab obyekt o‘z xatti-harakatlarini o‘zgartiradi. Bu patternda obyekt turli holatlar orasida oson o‘tishi mumkin va har bir holat uchun alohida xatti-harakatni ta’minlaydi. Buni davlat mashinasi (state machine) sifatida tushunish mumkin.
// 22Facade bizaga qiyin yoligakni ozini ichida bekitip beradi




// organish kere  Memoization danilani kash 


1html,
2css,
3tailwind,
4bootstrapt,
5dasyui,
6materialui,
7nextUi,
8js,
9nodejs,
10express,
11mongoose,
12sql,
13sqlalchemy,
14mySql,
15posgressSql,
16sqlLite,
17pythond,
18django-web,
19django-drf-api,
20fast api,
21react,
22vue,
23nest-js,
24telegram-bot(python-aiogram2.25.1),
25 telegram-bot(python-aiogram=3), 
26next-js,
27telegram-bot(node-telegram-api),
28 pwa(react and vue)
29 docker
30 ci/cd
31 git 
32 git hub 
33 git lab 
34prisma
35dessigin pattrnt
36 ubuntu server
37 web server 