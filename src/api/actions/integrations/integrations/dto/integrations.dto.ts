import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class IntegrationsDto {
  
    @ApiProperty()
    idposttype:number;

    @ApiProperty()
    idmethod:number;

    @ApiProperty()
    path:string;
    
    @ApiProperty()
    userid:number;

    @ApiProperty()
    status:number;

    @ApiProperty()
    response:string;

    @ApiProperty()
    template:string;

    @ApiProperty()
    datecreated:string;

    @Expose()
    @ApiProperty()
    dateupdated:string;

    constructor(idposttype:number, idmethod:number,path:string, userid:number,
        status:number, response:string, template:string, datecreated:string, dateupdated:string){
        this.idposttype=idposttype;
        this.idmethod=idmethod;
        this.path=path;
        this.userid=userid;
        this.status=status;
        this.response=response;
        this.template=template;
        this.datecreated=datecreated;
        this.dateupdated=dateupdated
        ;
    }


}