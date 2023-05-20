
public with sharing class AccountService {

    @auraEnabled(cacheable=true)
    public static List<Account> getAccounts(String accountName) {
        String strKey = '%'+ accountName +'%' ;
         List<Account> accList = [SELECT ID, Name, Industry FROM Account WHERE Name Like: strKey LIMIT 5];
         return accList;
    }

    @auraEnabled(cacheable=true)
    public static List<Account> getAccountList( Integer totalAccounts) {
        List<Account> accList = [SELECT Id, Name FROM Account LIMIT: totalAccounts];
        return accList;

    }   

    @auraEnabled(cacheable=true)
    public static List<Account> getAccountInTable(){
            return[SELECT Id, Name, Industry, Website, Phone FROM Account Limit 5];

}



}


