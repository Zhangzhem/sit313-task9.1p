import Faker from 'faker';

const ItemList1 = [
    {
        'avater': Faker.image.avatar(),
        'name': Faker.name.firstName(),
        'description': Faker.name.jobTitle()
    },
    {
        'avater': Faker.image.avatar(),
        'name': Faker.name.firstName(),
        'description': Faker.name.jobTitle()
    },
    {
        'avater': Faker.image.avatar(),
        'name': Faker.name.firstName(),
        'description': Faker.name.jobTitle()
    }
]

export default ItemList1;