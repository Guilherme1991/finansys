import {InMemoryDbService} from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model"
export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamento de contas da casa"},
            {id: 2, name: "Saúde", description: "Plano de saúde e remédios"},
            {id: 3, name: "Lazer", description: "Pagamento de contas da casa"},
            {id: 4, name: "Lazer", description: "Pagamento de contas da casa"},
            {id: 5, name: "Lazer", description: "Pagamento de contas da casa"},
        ];

        return { categories }
    }
}