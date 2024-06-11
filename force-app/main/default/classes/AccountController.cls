public with sharing class AccountController {

//basit bir liste getirmek
@AuraEnabled(cacheable=true)  
public static  List<Account>  getAllAccounts() {

   List<Account> accList= [SELECT id,name FROM Account WITH  SECURITY_ENFORCED  LIMIT 5];
      return accList;
    }
    
//filtre ile LİSTE getirmek(parameter grerek)
@AuraEnabled(cacheable=true)  
public static  List<Account> accountFiltre(String accIsim){


    try {
 string acc = '%'+accIsim+'%';
 string sorgu = 'SELECT d,name FROM account WHERE name LIKE acc '; 
 return Database.query(sorgu);
  


 } catch (Exception e) {
 throw new AuraHandledException(e.getMessage());
    }
}

//IMPERATIVE yontem  ile liste getirmek(butona basınca calıscak)

@AuraEnabled  
public static  List<Account> accountFiltreImperative(String accIsim){

    try {
 string acc = '%'+accIsim+'%';
 string sorgu = 'SELECT id,name FROM Account  WHERE name LIKE \'%' +accIsim+'%\' ';
 return Database.query(sorgu);
  

 } catch (Exception e) {
 throw new AuraHandledException(e.getMessage());
    }
}


}