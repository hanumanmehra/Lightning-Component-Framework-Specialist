public with sharing class BoatSearchResults {

    @Auraenabled
    public static List<Boat__c> getBoats(String boatTypeId){
       if(boatTypeId != ''){
       return ([Select Id,Name, BoatType__c , Contact__r.Name , Description__c,Geolocation__c,Length__c,Price__c,Year_Built__c
               from Boat__c Where Id = :boatTypeId]); 
       }
       else{
           return ([SELECT Id, BoatType__c, picture__c, name,contact__r.Name from Boat__c]);
       }
    }
}