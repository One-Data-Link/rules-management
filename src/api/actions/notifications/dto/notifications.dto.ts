import { ApiProperty } from "@nestjs/swagger";

export class NotificationsDto {
    @ApiProperty()
    userid:number;

    @ApiProperty()
    tonotification:string;

    @ApiProperty()
    fromnotification:string;

    @ApiProperty()
    datecreated:string;
    
    @ApiProperty()
    dateupdated:string;
    
    @ApiProperty()
    templatenotification:string;
    
    constructor(userID:number, to:string, from:string, dateCreated:string, dateUpdated:string, template:string){
        this.userid=userID;
        this.tonotification=to;
        this.fromnotification=from;
        this.datecreated=dateCreated;
        this.dateupdated=dateUpdated;
        this.templatenotification=template;
    }
}