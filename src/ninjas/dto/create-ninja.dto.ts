import { MinLength, IsEnum } from 'class-validator';
export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['sword', 'gun', 'nunchucks', 'star'], {"message": "Invalid weapon"})
    weapon: 'sword' | 'gun' | 'nunchucks' | 'star';

    belt: 'black' | 'purple' | 'red';
}
