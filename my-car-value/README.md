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

### hash
- passwords in plain text, bad
- password => input[hashing Function]output => hash
- very small changes to the input result in a complete different hash
- rainbow table attack(ランダムにpasswordを繰り返し送り続ける) => saltを食えることで防げる

### cookie session
- Cookie-session library looks at the 'Cookie' header
- Cookie-session decodes the string, resulting in an object
- We get access to session object in a request handler using a decorator
- We add/remove/change properties on the session object
- Cookie-session sees the updated session and turns it into an encrypted string
- String sent back in the 'Set-cookie' header on the response object
