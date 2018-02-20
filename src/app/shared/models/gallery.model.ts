export class Gallery {
    public id: number;
    public name: string;
    public description: string;
    public images_url: any[];
    public user_id: number;

    constructor(id?, name?, description?, images_url?, user_id?){
        this.id= id;
        this.name = name;
        this.description = description;
        this.images_url = images_url;
        this.user_id=user_id;
    }
}
