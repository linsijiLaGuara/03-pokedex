import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Pokemon extends Document {
    @Prop({
        inique: true,
        index: true,
    })
    name: string;
    @Prop({
        inique: true,
        index: true,
     })
    no: number;
}
export const PokemonSchema =  SchemaFactory.createForClass(Pokemon);