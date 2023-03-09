# Nestjs

### 用語
| 用語 | 説明 |
| --- | --- |
| Pipe | リクエストに含まれるデータのバリデーション |
| Guard | ユーザー認証の確認 |
| Controller | 特定のファンクションに対してリクエストをルートする |
| Service | ビジネスロジックの実行 |
| Repository | DBへアクセス |

### Convention
1. One Class Per file(some exceptions)
2. Class names should include the kind of thing we are creating
3. Name of class and name of file should always match up
4. Filename template: name.type_of_thing.ts