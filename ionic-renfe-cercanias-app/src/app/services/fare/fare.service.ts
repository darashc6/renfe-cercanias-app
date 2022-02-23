import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fare } from 'src/app/models/Fare';

@Injectable({
  providedIn: 'root'
})
export class FareService {
  private fareList: Fare[] = [
    {
      id: 'billete-sencillo',
      title: 'Billete sencillo',
      subtitle: 'Válidos para un único viaje',
      content: [
        'Válidos para un único viaje',
        'Su precio varía en función de las zonas que se vayan a recorrer.',
        'Tienes un máximo de dos horas para iniciar tu viaje tras la compra del billete.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 1.80
        },
        {
          zone: '3 Zonas',
          price: 2.05
        },
        {
          zone: '4 Zonas',
          price: 2.70
        },
        {
          zone: '5 Zonas',
          price: 3.60
        },
      ]
    },
    {
      id: 'billete-ida-vuelta',
      title: 'Billete ida y vuelta',
      subtitle: 'Válidos para 2 viajes, uno de ida y otro de regreso',
      content: [
        'Válidos para 2 viajes, uno de ida y otro de regreso',
        'Tienes un máximo de dos horas para iniciar tu viaje tras la compra del billete.',
        'El regreso debe realizarse a lo largo del mismo día.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 3.60
        },
        {
          zone: '3 Zonas',
          price: 4.10
        },
        {
          zone: '4 Zonas',
          price: 5.40
        },
        {
          zone: '5 Zonas',
          price: 7.20
        },
      ]
    },
    {
      id: 'abono-mensual-limitado',
      title: 'Abono mensual limitado',
      subtitle: 'Para los que viajan todos los días en un mismo recorrido',
      content: [
        'Dos viajes al día durante un mes, independientemente del sentido del viaje.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 35.80
        },
        {
          zone: '3 Zonas',
          price: 42.00
        },
        {
          zone: '4 Zonas',
          price: 60.85
        },
        {
          zone: '5 Zonas',
          price: 75.70
        },
      ]
    },
    {
      id: 'abono-mensual-ilimitado',
      title: 'Abono mensual ilimitado',
      subtitle: 'Para los que viajan sin limites',
      content: [
        'Viajes ilimitados durante todo el mes.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 47.85
        },
        {
          zone: '3 Zonas',
          price: 55.30
        },
        {
          zone: '4 Zonas',
          price: 74.70
        },
        {
          zone: '5 Zonas',
          price: 100.15
        }
      ]
    },
    {
      id: 'bonotren',
      title: 'Bonotren',
      subtitle: 'No importa cuanto viajes, también tienes descuento',
      content: [
        'Hasta 10 viajes al mes, de ida o vuelta indistintamente.',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'No está personalizado y es transferible',
        'Validez: Todos los días durante un mes.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 11.95
        },
        {
          zone: '3 Zonas',
          price: 13.85
        },
        {
          zone: '4 Zonas',
          price: 18.70
        },
        {
          zone: '5 Zonas',
          price: 25.05
        },
      ]
    },
    {
      id: 'abono-estudio',
      title: 'Abono estudio',
      subtitle: 'Si eres estudiante, te interesa este abono',
      content: [
        'Viajes ilimitados durante tres meses, en periodo lectivo (1 de octubre al 15 de julio).',
        'Siempre en el mismo trayecto que hayas elegido en el momento de la compra del abono.',
        'Es unipersonal, personalizado e intransferible.',
        'Validez:  1 trimestre (octubre-diciembre/enero-marzo/abril-15 de julio.'
      ],
      prices: [
        {
          zone: '1/2 Zonas',
          price: 89.60
        },
        {
          zone: '3 Zonas',
          price: 111.50
        },
        {
          zone: '4 Zonas',
          price: 171.45
        },
        {
          zone: '5 Zonas',
          price: 210.85
        },
      ]
    },
  ]

  constructor() { }

  getFares(): Observable<Fare[]> {
    return of(this.fareList);
  }

  getFare(fareId: string): Observable<Fare> {
    let fare = this.fareList.find(fare => fare.id === fareId);
    return of(fare);
  }
}
