API の設計してから、Module の設計をするとよい

| name       | explain                                           |
| ---------- | ------------------------------------------------- |
| Entity     | Lists the different properties (no functionality) |
| Repositroy | Methods to find, update, delete, create a         |
| Migration  | Changes the structure of the db                   |

### Creating an Entiry

1. Create an entity file, and create a class in it that lists all the properties that your entity will have
2. Connect the entity to its parent module. This creates a repositroy
3. Connect the entity to the root connection(in app module)

### TypeOrm
