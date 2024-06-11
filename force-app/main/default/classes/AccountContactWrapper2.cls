public with sharing class AccountContactWrapper2 {
  
    // Creating a wrapper class where I will have different sObject as its member.(bu wrapper ın sytntaxı,farklı data tıplerınden lıst olusturmamzı saglar wraper:ınteger strıng brarada gbı)
      public class AccountContactListWrapper{
      @AuraEnabled
      public Account accRecord{get; set;}
      @AuraEnabled
      public List<Contact> contactList{get; set;}
      @AuraEnabled
      public Integer contactCount{get; set;}
  }


  @AuraEnabled(cacheable=true)
  public static List<AccountContactListWrapper> getAllAccountWithContact(){
      
      List<AccountContactListWrapper> accConWrapperList = new List<AccountContactListWrapper>();
     List<Account> accList = [SELECT Id, Name, (SELECT Id, Name, FirstName, LastName, Email, MobilePhone FROM Contacts) FROM Account];
      try {
          
          if(!accList.isEmpty()){
              for(Account acc : accList){
                  AccountContactListWrapper accConWrapper  = new AccountContactListWrapper();
                  accConWrapper.accRecord = acc;
                  accConWrapper.contactList = acc.Contacts;
                  accConWrapper.contactCount = acc.Contacts.size();
                  accConWrapperList.add(accConWrapper);
              }
          }

          return accConWrapperList;

      } catch (Exception e) {
          throw new AuraHandledException(e.getMessage());
      }
  }


}