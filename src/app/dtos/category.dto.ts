import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator';
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDTO extends Omit<Category, 'id'> {}

export class CreateCategoryDTO implements ICreateCategoryDTO {
    @IsNotEmpty()
    @Length(4,100)
    name!: string;

    @IsUrl()
    image!: string;

    @IsNotEmpty()
    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async ()=> {
    try {
        const dto = new CreateCategoryDTO();
        dto.name = 'Carlos';
        await validateOrReject(dto);
        
    } catch (error) {
        console.log({error});
    }
})();