import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'Yoshi', belt: 'black', weapon: 'sword' },
        { id: 1, name: 'Crystal', belt: 'purple', weapon: 'gun' },
        { id: 2, name: 'Ryu', belt: 'red', weapon: 'nunchucks' },
    ];

    getNinjas(weapon?: 'sword' | 'gun' | 'nunchucks') {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }

    getOneNinja(id: number) {

        const ninja = this.ninjas.find((ninja) => ninja.id === id);
        if (!ninja) {
            throw new Error('Ninja not found');
        }
        return ninja;
    }

    createNinja(createNinjaDto: CreateNinjaDto) {
        const newNinja = {
            id: Date.now(),
            ...createNinjaDto,
        };
        this.ninjas.push(newNinja);
        return newNinja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        const ninja = this.getOneNinja(id);
        if (ninja) {
            return {
                ...ninja,
                ...updateNinjaDto,
            };
        }
    }

    removeNinja(id: number) {
        const ninja = this.getOneNinja(id);
        if (ninja) {
            this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
            return ninja;
        }
    }

}
