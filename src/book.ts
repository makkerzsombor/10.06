export class Book{
    name : string;
    rating : number;

    constructor(name: string, rating: number){
        this.name = name;
        this.rating = rating;
    }

    public set setRating(rating :number){
        if (rating > 10 || rating < 1) {
            throw new Error('Rating is invalid');
        } else {
            this.rating = rating;
        }
    }

    public toString(): string{
        return 'A könyv neve: '+ this.name +' a könyv értékelése: '+this.rating;
    }
}

