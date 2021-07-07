class Rent{
    constructor(element){
        this.element=element;
        this.rent();
    }
    rent(){
        let self=this;
        $(this.element).mouseover(function(){
            console.log($(self).html);
        });
    }
}