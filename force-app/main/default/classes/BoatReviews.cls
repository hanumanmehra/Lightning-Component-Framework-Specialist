public with sharing class BoatReviews{
    public List<BoatReview__c> getAll(){
    List<BoatReview__c> lstBR = [Select ID, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate, CreatedBy.Name,                            CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName from BoatReview__c];
        return lstBR;
    }
}