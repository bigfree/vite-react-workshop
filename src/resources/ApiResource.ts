import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export type CatResponse = {
    breeds: Breed[];
    id:     string;
    url:    string;
    width:  number;
    height: number;
}

export type Breed = {
    weight:             Weight;
    id:                 string;
    name:               string;
    vetstreet_url:      string;
    temperament:        string;
    origin:             string;
    country_codes:      string;
    country_code:       string;
    description:        string;
    life_span:          string;
    indoor:             number;
    alt_names:          string;
    adaptability:       number;
    affection_level:    number;
    child_friendly:     number;
    dog_friendly:       number;
    energy_level:       number;
    grooming:           number;
    health_issues:      number;
    intelligence:       number;
    shedding_level:     number;
    social_needs:       number;
    stranger_friendly:  number;
    vocalisation:       number;
    experimental:       number;
    hairless:           number;
    natural:            number;
    rare:               number;
    rex:                number;
    suppressed_tail:    number;
    short_legs:         number;
    wikipedia_url:      string;
    hypoallergenic:     number;
    reference_image_id: string;
}

export type Weight = {
    imperial: string;
    metric:   string;
}

export const useCat = (id: string) => {
    return useQuery(['cat', id], async () => {
        const {data}: AxiosResponse<CatResponse[]> = await axios.get(
            'https://api.thecatapi.com/v1/images/search?has_breeds=1', {
                headers: {
                    'x-api-key': 'live_9eW7NAYDT8I4oEBGgvAnrrF4hX3T5T0yqiAdDCQpPNkQdhI4EY15fukPVUTTRWYD'
                }
            }
        );
        return data;
    });
};