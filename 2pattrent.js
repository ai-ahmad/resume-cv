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

