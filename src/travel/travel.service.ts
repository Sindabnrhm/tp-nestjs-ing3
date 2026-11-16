
import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {

  // Liste des voyages
  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  // Ajouter un voyage
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }

  // Retourner tous les voyages
  findAll() {
    return this.trips;
  }

  // Retourner un seul voyage selon son ID
  findOne(id: number) {
    return this.trips.find(trip => trip.id === id);
  }

  // Modifier un voyage
  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  // Supprimer un voyage
  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
