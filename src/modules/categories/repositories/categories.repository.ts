import { CategoriesDto } from '../dto/categories.dto';
import { CategoriesEntity } from '../entities/categories.entities';

export abstract class CategoriesRepository {
  abstract create(data: CategoriesDto): Promise<CategoriesEntity>;

  abstract findAll(): Promise<CategoriesEntity[]>;

  //   abstract findByName(item_name: string): Promise<Categories>;

  abstract delete(id: string): Promise<void> | void;
}
