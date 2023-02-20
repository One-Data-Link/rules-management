import { ApiProperty } from "@nestjs/swagger";

export class IntegrationsDto {
    @ApiProperty()
    idheader:number;

    @ApiProperty()
    idresponse:number;

    @ApiProperty()
    idposttype:number;

    @ApiProperty()
    idmethod:number;

    @ApiProperty()
    idtemplate:number;

    @ApiProperty()
    path:string;
    
    @ApiProperty()
    userID:number;

    @ApiProperty()
    dateCreated:string;

    @ApiProperty()
    dateUpdated:string;

    constructor(idheader:number, idresponse:number, idposttype:number, idmethod:number, idtemplate:number,path:string, userID:number, dateCreated:string, dateUpdated:string){
        this.idheader=idheader;
        this.idresponse=idresponse;
        this.idposttype=idposttype;
        this.idmethod=idmethod;
        this.idtemplate=idtemplate;
        this.path=path;
        this.userID=userID;
        this.dateCreated=dateCreated;
        this.dateUpdated=dateUpdated;
    }


}