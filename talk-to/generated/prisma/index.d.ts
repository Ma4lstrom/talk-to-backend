
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model DeleteAccountRequest
 * 
 */
export type DeleteAccountRequest = $Result.DefaultSelection<Prisma.$DeleteAccountRequestPayload>
/**
 * Model ContactUsRequest
 * 
 */
export type ContactUsRequest = $Result.DefaultSelection<Prisma.$ContactUsRequestPayload>
/**
 * Model InfoPages
 * 
 */
export type InfoPages = $Result.DefaultSelection<Prisma.$InfoPagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ParticipantType: {
  USER: 'USER',
  AVATAR: 'AVATAR'
};

export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ParticipantType = $Enums.ParticipantType

export const ParticipantType: typeof $Enums.ParticipantType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deleteAccountRequest`: Exposes CRUD operations for the **DeleteAccountRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeleteAccountRequests
    * const deleteAccountRequests = await prisma.deleteAccountRequest.findMany()
    * ```
    */
  get deleteAccountRequest(): Prisma.DeleteAccountRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactUsRequest`: Exposes CRUD operations for the **ContactUsRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactUsRequests
    * const contactUsRequests = await prisma.contactUsRequest.findMany()
    * ```
    */
  get contactUsRequest(): Prisma.ContactUsRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.infoPages`: Exposes CRUD operations for the **InfoPages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InfoPages
    * const infoPages = await prisma.infoPages.findMany()
    * ```
    */
  get infoPages(): Prisma.InfoPagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Avatar: 'Avatar',
    Conversation: 'Conversation',
    Message: 'Message',
    DeleteAccountRequest: 'DeleteAccountRequest',
    ContactUsRequest: 'ContactUsRequest',
    InfoPages: 'InfoPages'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "avatar" | "conversation" | "message" | "deleteAccountRequest" | "contactUsRequest" | "infoPages"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      DeleteAccountRequest: {
        payload: Prisma.$DeleteAccountRequestPayload<ExtArgs>
        fields: Prisma.DeleteAccountRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeleteAccountRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeleteAccountRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          findFirst: {
            args: Prisma.DeleteAccountRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeleteAccountRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          findMany: {
            args: Prisma.DeleteAccountRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>[]
          }
          create: {
            args: Prisma.DeleteAccountRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          createMany: {
            args: Prisma.DeleteAccountRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeleteAccountRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>[]
          }
          delete: {
            args: Prisma.DeleteAccountRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          update: {
            args: Prisma.DeleteAccountRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          deleteMany: {
            args: Prisma.DeleteAccountRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeleteAccountRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeleteAccountRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>[]
          }
          upsert: {
            args: Prisma.DeleteAccountRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleteAccountRequestPayload>
          }
          aggregate: {
            args: Prisma.DeleteAccountRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeleteAccountRequest>
          }
          groupBy: {
            args: Prisma.DeleteAccountRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeleteAccountRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeleteAccountRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DeleteAccountRequestCountAggregateOutputType> | number
          }
        }
      }
      ContactUsRequest: {
        payload: Prisma.$ContactUsRequestPayload<ExtArgs>
        fields: Prisma.ContactUsRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactUsRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactUsRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          findFirst: {
            args: Prisma.ContactUsRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactUsRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          findMany: {
            args: Prisma.ContactUsRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>[]
          }
          create: {
            args: Prisma.ContactUsRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          createMany: {
            args: Prisma.ContactUsRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactUsRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>[]
          }
          delete: {
            args: Prisma.ContactUsRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          update: {
            args: Prisma.ContactUsRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          deleteMany: {
            args: Prisma.ContactUsRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUsRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUsRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>[]
          }
          upsert: {
            args: Prisma.ContactUsRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactUsRequestPayload>
          }
          aggregate: {
            args: Prisma.ContactUsRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactUsRequest>
          }
          groupBy: {
            args: Prisma.ContactUsRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactUsRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactUsRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ContactUsRequestCountAggregateOutputType> | number
          }
        }
      }
      InfoPages: {
        payload: Prisma.$InfoPagesPayload<ExtArgs>
        fields: Prisma.InfoPagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InfoPagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InfoPagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          findFirst: {
            args: Prisma.InfoPagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InfoPagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          findMany: {
            args: Prisma.InfoPagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>[]
          }
          create: {
            args: Prisma.InfoPagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          createMany: {
            args: Prisma.InfoPagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InfoPagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>[]
          }
          delete: {
            args: Prisma.InfoPagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          update: {
            args: Prisma.InfoPagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          deleteMany: {
            args: Prisma.InfoPagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InfoPagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InfoPagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>[]
          }
          upsert: {
            args: Prisma.InfoPagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InfoPagesPayload>
          }
          aggregate: {
            args: Prisma.InfoPagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInfoPages>
          }
          groupBy: {
            args: Prisma.InfoPagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InfoPagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.InfoPagesCountArgs<ExtArgs>
            result: $Utils.Optional<InfoPagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    avatar?: AvatarOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    deleteAccountRequest?: DeleteAccountRequestOmit
    contactUsRequest?: ContactUsRequestOmit
    infoPages?: InfoPagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    avatars: number
    conversations: number
    DeleteAccountRequest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatars?: boolean | UserCountOutputTypeCountAvatarsArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    DeleteAccountRequest?: boolean | UserCountOutputTypeCountDeleteAccountRequestArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeleteAccountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeleteAccountRequestWhereInput
  }


  /**
   * Count Type AvatarCountOutputType
   */

  export type AvatarCountOutputType = {
    conversations: number
  }

  export type AvatarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | AvatarCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvatarCountOutputType
     */
    select?: AvatarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvatarCountOutputType without action
   */
  export type AvatarCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletionStatus: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    deletionStatus: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    deviceDetails: number
    createdAt: number
    updatedAt: number
    deletionStatus: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletionStatus?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    deletionStatus?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    deviceDetails?: true
    createdAt?: true
    updatedAt?: true
    deletionStatus?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails: JsonValue | null
    createdAt: Date
    updatedAt: Date
    deletionStatus: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    deviceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletionStatus?: boolean
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    DeleteAccountRequest?: boolean | User$DeleteAccountRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    deviceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletionStatus?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    deviceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletionStatus?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    deviceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletionStatus?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "deviceDetails" | "createdAt" | "updatedAt" | "deletionStatus", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    DeleteAccountRequest?: boolean | User$DeleteAccountRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      avatars: Prisma.$AvatarPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      DeleteAccountRequest: Prisma.$DeleteAccountRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      role: $Enums.Role
      deviceDetails: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      deletionStatus: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avatars<T extends User$avatarsArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DeleteAccountRequest<T extends User$DeleteAccountRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$DeleteAccountRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly deviceDetails: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletionStatus: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.avatars
   */
  export type User$avatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.DeleteAccountRequest
   */
  export type User$DeleteAccountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    where?: DeleteAccountRequestWhereInput
    orderBy?: DeleteAccountRequestOrderByWithRelationInput | DeleteAccountRequestOrderByWithRelationInput[]
    cursor?: DeleteAccountRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeleteAccountRequestScalarFieldEnum | DeleteAccountRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvatarSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AvatarMinAggregateOutputType = {
    id: number | null
    readyPlayerMeId: string | null
    name: string | null
    personality: string | null
    glbURL: string | null
    userId: number | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: number | null
    readyPlayerMeId: string | null
    name: string | null
    personality: string | null
    glbURL: string | null
    userId: number | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    readyPlayerMeId: number
    name: number
    personality: number
    glbURL: number
    userId: number
    _all: number
  }


  export type AvatarAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvatarSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AvatarMinAggregateInputType = {
    id?: true
    readyPlayerMeId?: true
    name?: true
    personality?: true
    glbURL?: true
    userId?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    readyPlayerMeId?: true
    name?: true
    personality?: true
    glbURL?: true
    userId?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    readyPlayerMeId?: true
    name?: true
    personality?: true
    glbURL?: true
    userId?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _avg?: AvatarAvgAggregateInputType
    _sum?: AvatarSumAggregateInputType
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    userId: number
    _count: AvatarCountAggregateOutputType | null
    _avg: AvatarAvgAggregateOutputType | null
    _sum: AvatarSumAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readyPlayerMeId?: boolean
    name?: boolean
    personality?: boolean
    glbURL?: boolean
    userId?: boolean
    conversations?: boolean | Avatar$conversationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readyPlayerMeId?: boolean
    name?: boolean
    personality?: boolean
    glbURL?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    readyPlayerMeId?: boolean
    name?: boolean
    personality?: boolean
    glbURL?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    readyPlayerMeId?: boolean
    name?: boolean
    personality?: boolean
    glbURL?: boolean
    userId?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "readyPlayerMeId" | "name" | "personality" | "glbURL" | "userId", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Avatar$conversationsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AvatarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      readyPlayerMeId: string
      name: string
      personality: string
      glbURL: string
      userId: number
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Avatar$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'Int'>
    readonly readyPlayerMeId: FieldRef<"Avatar", 'String'>
    readonly name: FieldRef<"Avatar", 'String'>
    readonly personality: FieldRef<"Avatar", 'String'>
    readonly glbURL: FieldRef<"Avatar", 'String'>
    readonly userId: FieldRef<"Avatar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar.conversations
   */
  export type Avatar$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarId: number | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarId: number | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userId: number
    avatarId: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    userId?: true
    avatarId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    userId?: true
    avatarId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    userId?: true
    avatarId?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    avatarId?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userId?: true
    avatarId?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    userId: number
    avatarId: number
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarId?: boolean
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    avatarId?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "avatarId", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    avatar?: boolean | AvatarDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      avatar: Prisma.$AvatarPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      avatarId: number
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avatar<T extends AvatarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvatarDefaultArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly userId: FieldRef<"Conversation", 'Int'>
    readonly avatarId: FieldRef<"Conversation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    avatarId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    avatarId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    avatarId: number | null
    senderType: $Enums.ParticipantType | null
    receiverType: $Enums.ParticipantType | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    conversationId: number | null
    userId: number | null
    avatarId: number | null
    senderType: $Enums.ParticipantType | null
    receiverType: $Enums.ParticipantType | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    userId: number
    avatarId: number
    senderType: number
    receiverType: number
    createdAt: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    avatarId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    avatarId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    avatarId?: true
    senderType?: true
    receiverType?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    avatarId?: true
    senderType?: true
    receiverType?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    avatarId?: true
    senderType?: true
    receiverType?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    conversationId: number
    userId: number | null
    avatarId: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    avatarId?: boolean
    senderType?: boolean
    receiverType?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    avatarId?: boolean
    senderType?: boolean
    receiverType?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    avatarId?: boolean
    senderType?: boolean
    receiverType?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    avatarId?: boolean
    senderType?: boolean
    receiverType?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "userId" | "avatarId" | "senderType" | "receiverType" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversationId: number
      userId: number | null
      avatarId: number | null
      senderType: $Enums.ParticipantType
      receiverType: $Enums.ParticipantType
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly conversationId: FieldRef<"Message", 'Int'>
    readonly userId: FieldRef<"Message", 'Int'>
    readonly avatarId: FieldRef<"Message", 'Int'>
    readonly senderType: FieldRef<"Message", 'ParticipantType'>
    readonly receiverType: FieldRef<"Message", 'ParticipantType'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model DeleteAccountRequest
   */

  export type AggregateDeleteAccountRequest = {
    _count: DeleteAccountRequestCountAggregateOutputType | null
    _avg: DeleteAccountRequestAvgAggregateOutputType | null
    _sum: DeleteAccountRequestSumAggregateOutputType | null
    _min: DeleteAccountRequestMinAggregateOutputType | null
    _max: DeleteAccountRequestMaxAggregateOutputType | null
  }

  export type DeleteAccountRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeleteAccountRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeleteAccountRequestMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeleteAccountRequestMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DeleteAccountRequestCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type DeleteAccountRequestAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeleteAccountRequestSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeleteAccountRequestMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeleteAccountRequestMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DeleteAccountRequestCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type DeleteAccountRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeleteAccountRequest to aggregate.
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteAccountRequests to fetch.
     */
    orderBy?: DeleteAccountRequestOrderByWithRelationInput | DeleteAccountRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeleteAccountRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteAccountRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteAccountRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeleteAccountRequests
    **/
    _count?: true | DeleteAccountRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeleteAccountRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeleteAccountRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeleteAccountRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeleteAccountRequestMaxAggregateInputType
  }

  export type GetDeleteAccountRequestAggregateType<T extends DeleteAccountRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDeleteAccountRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeleteAccountRequest[P]>
      : GetScalarType<T[P], AggregateDeleteAccountRequest[P]>
  }




  export type DeleteAccountRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeleteAccountRequestWhereInput
    orderBy?: DeleteAccountRequestOrderByWithAggregationInput | DeleteAccountRequestOrderByWithAggregationInput[]
    by: DeleteAccountRequestScalarFieldEnum[] | DeleteAccountRequestScalarFieldEnum
    having?: DeleteAccountRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeleteAccountRequestCountAggregateInputType | true
    _avg?: DeleteAccountRequestAvgAggregateInputType
    _sum?: DeleteAccountRequestSumAggregateInputType
    _min?: DeleteAccountRequestMinAggregateInputType
    _max?: DeleteAccountRequestMaxAggregateInputType
  }

  export type DeleteAccountRequestGroupByOutputType = {
    id: number
    userId: number
    _count: DeleteAccountRequestCountAggregateOutputType | null
    _avg: DeleteAccountRequestAvgAggregateOutputType | null
    _sum: DeleteAccountRequestSumAggregateOutputType | null
    _min: DeleteAccountRequestMinAggregateOutputType | null
    _max: DeleteAccountRequestMaxAggregateOutputType | null
  }

  type GetDeleteAccountRequestGroupByPayload<T extends DeleteAccountRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeleteAccountRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeleteAccountRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeleteAccountRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DeleteAccountRequestGroupByOutputType[P]>
        }
      >
    >


  export type DeleteAccountRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteAccountRequest"]>

  export type DeleteAccountRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteAccountRequest"]>

  export type DeleteAccountRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deleteAccountRequest"]>

  export type DeleteAccountRequestSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type DeleteAccountRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["deleteAccountRequest"]>
  export type DeleteAccountRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeleteAccountRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeleteAccountRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeleteAccountRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeleteAccountRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["deleteAccountRequest"]>
    composites: {}
  }

  type DeleteAccountRequestGetPayload<S extends boolean | null | undefined | DeleteAccountRequestDefaultArgs> = $Result.GetResult<Prisma.$DeleteAccountRequestPayload, S>

  type DeleteAccountRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeleteAccountRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeleteAccountRequestCountAggregateInputType | true
    }

  export interface DeleteAccountRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeleteAccountRequest'], meta: { name: 'DeleteAccountRequest' } }
    /**
     * Find zero or one DeleteAccountRequest that matches the filter.
     * @param {DeleteAccountRequestFindUniqueArgs} args - Arguments to find a DeleteAccountRequest
     * @example
     * // Get one DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeleteAccountRequestFindUniqueArgs>(args: SelectSubset<T, DeleteAccountRequestFindUniqueArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeleteAccountRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeleteAccountRequestFindUniqueOrThrowArgs} args - Arguments to find a DeleteAccountRequest
     * @example
     * // Get one DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeleteAccountRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DeleteAccountRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeleteAccountRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestFindFirstArgs} args - Arguments to find a DeleteAccountRequest
     * @example
     * // Get one DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeleteAccountRequestFindFirstArgs>(args?: SelectSubset<T, DeleteAccountRequestFindFirstArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeleteAccountRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestFindFirstOrThrowArgs} args - Arguments to find a DeleteAccountRequest
     * @example
     * // Get one DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeleteAccountRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DeleteAccountRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeleteAccountRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeleteAccountRequests
     * const deleteAccountRequests = await prisma.deleteAccountRequest.findMany()
     * 
     * // Get first 10 DeleteAccountRequests
     * const deleteAccountRequests = await prisma.deleteAccountRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deleteAccountRequestWithIdOnly = await prisma.deleteAccountRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeleteAccountRequestFindManyArgs>(args?: SelectSubset<T, DeleteAccountRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeleteAccountRequest.
     * @param {DeleteAccountRequestCreateArgs} args - Arguments to create a DeleteAccountRequest.
     * @example
     * // Create one DeleteAccountRequest
     * const DeleteAccountRequest = await prisma.deleteAccountRequest.create({
     *   data: {
     *     // ... data to create a DeleteAccountRequest
     *   }
     * })
     * 
     */
    create<T extends DeleteAccountRequestCreateArgs>(args: SelectSubset<T, DeleteAccountRequestCreateArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeleteAccountRequests.
     * @param {DeleteAccountRequestCreateManyArgs} args - Arguments to create many DeleteAccountRequests.
     * @example
     * // Create many DeleteAccountRequests
     * const deleteAccountRequest = await prisma.deleteAccountRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeleteAccountRequestCreateManyArgs>(args?: SelectSubset<T, DeleteAccountRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeleteAccountRequests and returns the data saved in the database.
     * @param {DeleteAccountRequestCreateManyAndReturnArgs} args - Arguments to create many DeleteAccountRequests.
     * @example
     * // Create many DeleteAccountRequests
     * const deleteAccountRequest = await prisma.deleteAccountRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeleteAccountRequests and only return the `id`
     * const deleteAccountRequestWithIdOnly = await prisma.deleteAccountRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeleteAccountRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, DeleteAccountRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeleteAccountRequest.
     * @param {DeleteAccountRequestDeleteArgs} args - Arguments to delete one DeleteAccountRequest.
     * @example
     * // Delete one DeleteAccountRequest
     * const DeleteAccountRequest = await prisma.deleteAccountRequest.delete({
     *   where: {
     *     // ... filter to delete one DeleteAccountRequest
     *   }
     * })
     * 
     */
    delete<T extends DeleteAccountRequestDeleteArgs>(args: SelectSubset<T, DeleteAccountRequestDeleteArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeleteAccountRequest.
     * @param {DeleteAccountRequestUpdateArgs} args - Arguments to update one DeleteAccountRequest.
     * @example
     * // Update one DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeleteAccountRequestUpdateArgs>(args: SelectSubset<T, DeleteAccountRequestUpdateArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeleteAccountRequests.
     * @param {DeleteAccountRequestDeleteManyArgs} args - Arguments to filter DeleteAccountRequests to delete.
     * @example
     * // Delete a few DeleteAccountRequests
     * const { count } = await prisma.deleteAccountRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeleteAccountRequestDeleteManyArgs>(args?: SelectSubset<T, DeleteAccountRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeleteAccountRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeleteAccountRequests
     * const deleteAccountRequest = await prisma.deleteAccountRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeleteAccountRequestUpdateManyArgs>(args: SelectSubset<T, DeleteAccountRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeleteAccountRequests and returns the data updated in the database.
     * @param {DeleteAccountRequestUpdateManyAndReturnArgs} args - Arguments to update many DeleteAccountRequests.
     * @example
     * // Update many DeleteAccountRequests
     * const deleteAccountRequest = await prisma.deleteAccountRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeleteAccountRequests and only return the `id`
     * const deleteAccountRequestWithIdOnly = await prisma.deleteAccountRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeleteAccountRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, DeleteAccountRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeleteAccountRequest.
     * @param {DeleteAccountRequestUpsertArgs} args - Arguments to update or create a DeleteAccountRequest.
     * @example
     * // Update or create a DeleteAccountRequest
     * const deleteAccountRequest = await prisma.deleteAccountRequest.upsert({
     *   create: {
     *     // ... data to create a DeleteAccountRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeleteAccountRequest we want to update
     *   }
     * })
     */
    upsert<T extends DeleteAccountRequestUpsertArgs>(args: SelectSubset<T, DeleteAccountRequestUpsertArgs<ExtArgs>>): Prisma__DeleteAccountRequestClient<$Result.GetResult<Prisma.$DeleteAccountRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeleteAccountRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestCountArgs} args - Arguments to filter DeleteAccountRequests to count.
     * @example
     * // Count the number of DeleteAccountRequests
     * const count = await prisma.deleteAccountRequest.count({
     *   where: {
     *     // ... the filter for the DeleteAccountRequests we want to count
     *   }
     * })
    **/
    count<T extends DeleteAccountRequestCountArgs>(
      args?: Subset<T, DeleteAccountRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeleteAccountRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeleteAccountRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeleteAccountRequestAggregateArgs>(args: Subset<T, DeleteAccountRequestAggregateArgs>): Prisma.PrismaPromise<GetDeleteAccountRequestAggregateType<T>>

    /**
     * Group by DeleteAccountRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeleteAccountRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeleteAccountRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeleteAccountRequestGroupByArgs['orderBy'] }
        : { orderBy?: DeleteAccountRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeleteAccountRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeleteAccountRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeleteAccountRequest model
   */
  readonly fields: DeleteAccountRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeleteAccountRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeleteAccountRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeleteAccountRequest model
   */
  interface DeleteAccountRequestFieldRefs {
    readonly id: FieldRef<"DeleteAccountRequest", 'Int'>
    readonly userId: FieldRef<"DeleteAccountRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeleteAccountRequest findUnique
   */
  export type DeleteAccountRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter, which DeleteAccountRequest to fetch.
     */
    where: DeleteAccountRequestWhereUniqueInput
  }

  /**
   * DeleteAccountRequest findUniqueOrThrow
   */
  export type DeleteAccountRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter, which DeleteAccountRequest to fetch.
     */
    where: DeleteAccountRequestWhereUniqueInput
  }

  /**
   * DeleteAccountRequest findFirst
   */
  export type DeleteAccountRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter, which DeleteAccountRequest to fetch.
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteAccountRequests to fetch.
     */
    orderBy?: DeleteAccountRequestOrderByWithRelationInput | DeleteAccountRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeleteAccountRequests.
     */
    cursor?: DeleteAccountRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteAccountRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteAccountRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeleteAccountRequests.
     */
    distinct?: DeleteAccountRequestScalarFieldEnum | DeleteAccountRequestScalarFieldEnum[]
  }

  /**
   * DeleteAccountRequest findFirstOrThrow
   */
  export type DeleteAccountRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter, which DeleteAccountRequest to fetch.
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteAccountRequests to fetch.
     */
    orderBy?: DeleteAccountRequestOrderByWithRelationInput | DeleteAccountRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeleteAccountRequests.
     */
    cursor?: DeleteAccountRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteAccountRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteAccountRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeleteAccountRequests.
     */
    distinct?: DeleteAccountRequestScalarFieldEnum | DeleteAccountRequestScalarFieldEnum[]
  }

  /**
   * DeleteAccountRequest findMany
   */
  export type DeleteAccountRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter, which DeleteAccountRequests to fetch.
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeleteAccountRequests to fetch.
     */
    orderBy?: DeleteAccountRequestOrderByWithRelationInput | DeleteAccountRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeleteAccountRequests.
     */
    cursor?: DeleteAccountRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeleteAccountRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeleteAccountRequests.
     */
    skip?: number
    distinct?: DeleteAccountRequestScalarFieldEnum | DeleteAccountRequestScalarFieldEnum[]
  }

  /**
   * DeleteAccountRequest create
   */
  export type DeleteAccountRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DeleteAccountRequest.
     */
    data: XOR<DeleteAccountRequestCreateInput, DeleteAccountRequestUncheckedCreateInput>
  }

  /**
   * DeleteAccountRequest createMany
   */
  export type DeleteAccountRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeleteAccountRequests.
     */
    data: DeleteAccountRequestCreateManyInput | DeleteAccountRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeleteAccountRequest createManyAndReturn
   */
  export type DeleteAccountRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * The data used to create many DeleteAccountRequests.
     */
    data: DeleteAccountRequestCreateManyInput | DeleteAccountRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeleteAccountRequest update
   */
  export type DeleteAccountRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DeleteAccountRequest.
     */
    data: XOR<DeleteAccountRequestUpdateInput, DeleteAccountRequestUncheckedUpdateInput>
    /**
     * Choose, which DeleteAccountRequest to update.
     */
    where: DeleteAccountRequestWhereUniqueInput
  }

  /**
   * DeleteAccountRequest updateMany
   */
  export type DeleteAccountRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeleteAccountRequests.
     */
    data: XOR<DeleteAccountRequestUpdateManyMutationInput, DeleteAccountRequestUncheckedUpdateManyInput>
    /**
     * Filter which DeleteAccountRequests to update
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * Limit how many DeleteAccountRequests to update.
     */
    limit?: number
  }

  /**
   * DeleteAccountRequest updateManyAndReturn
   */
  export type DeleteAccountRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * The data used to update DeleteAccountRequests.
     */
    data: XOR<DeleteAccountRequestUpdateManyMutationInput, DeleteAccountRequestUncheckedUpdateManyInput>
    /**
     * Filter which DeleteAccountRequests to update
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * Limit how many DeleteAccountRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeleteAccountRequest upsert
   */
  export type DeleteAccountRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DeleteAccountRequest to update in case it exists.
     */
    where: DeleteAccountRequestWhereUniqueInput
    /**
     * In case the DeleteAccountRequest found by the `where` argument doesn't exist, create a new DeleteAccountRequest with this data.
     */
    create: XOR<DeleteAccountRequestCreateInput, DeleteAccountRequestUncheckedCreateInput>
    /**
     * In case the DeleteAccountRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeleteAccountRequestUpdateInput, DeleteAccountRequestUncheckedUpdateInput>
  }

  /**
   * DeleteAccountRequest delete
   */
  export type DeleteAccountRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
    /**
     * Filter which DeleteAccountRequest to delete.
     */
    where: DeleteAccountRequestWhereUniqueInput
  }

  /**
   * DeleteAccountRequest deleteMany
   */
  export type DeleteAccountRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeleteAccountRequests to delete
     */
    where?: DeleteAccountRequestWhereInput
    /**
     * Limit how many DeleteAccountRequests to delete.
     */
    limit?: number
  }

  /**
   * DeleteAccountRequest without action
   */
  export type DeleteAccountRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeleteAccountRequest
     */
    select?: DeleteAccountRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeleteAccountRequest
     */
    omit?: DeleteAccountRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeleteAccountRequestInclude<ExtArgs> | null
  }


  /**
   * Model ContactUsRequest
   */

  export type AggregateContactUsRequest = {
    _count: ContactUsRequestCountAggregateOutputType | null
    _avg: ContactUsRequestAvgAggregateOutputType | null
    _sum: ContactUsRequestSumAggregateOutputType | null
    _min: ContactUsRequestMinAggregateOutputType | null
    _max: ContactUsRequestMaxAggregateOutputType | null
  }

  export type ContactUsRequestAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactUsRequestSumAggregateOutputType = {
    id: number | null
  }

  export type ContactUsRequestMinAggregateOutputType = {
    id: number | null
    email: string | null
    message: string | null
    sentAt: Date | null
  }

  export type ContactUsRequestMaxAggregateOutputType = {
    id: number | null
    email: string | null
    message: string | null
    sentAt: Date | null
  }

  export type ContactUsRequestCountAggregateOutputType = {
    id: number
    email: number
    message: number
    sentAt: number
    _all: number
  }


  export type ContactUsRequestAvgAggregateInputType = {
    id?: true
  }

  export type ContactUsRequestSumAggregateInputType = {
    id?: true
  }

  export type ContactUsRequestMinAggregateInputType = {
    id?: true
    email?: true
    message?: true
    sentAt?: true
  }

  export type ContactUsRequestMaxAggregateInputType = {
    id?: true
    email?: true
    message?: true
    sentAt?: true
  }

  export type ContactUsRequestCountAggregateInputType = {
    id?: true
    email?: true
    message?: true
    sentAt?: true
    _all?: true
  }

  export type ContactUsRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUsRequest to aggregate.
     */
    where?: ContactUsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUsRequests to fetch.
     */
    orderBy?: ContactUsRequestOrderByWithRelationInput | ContactUsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactUsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactUsRequests
    **/
    _count?: true | ContactUsRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactUsRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactUsRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactUsRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactUsRequestMaxAggregateInputType
  }

  export type GetContactUsRequestAggregateType<T extends ContactUsRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateContactUsRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactUsRequest[P]>
      : GetScalarType<T[P], AggregateContactUsRequest[P]>
  }




  export type ContactUsRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactUsRequestWhereInput
    orderBy?: ContactUsRequestOrderByWithAggregationInput | ContactUsRequestOrderByWithAggregationInput[]
    by: ContactUsRequestScalarFieldEnum[] | ContactUsRequestScalarFieldEnum
    having?: ContactUsRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactUsRequestCountAggregateInputType | true
    _avg?: ContactUsRequestAvgAggregateInputType
    _sum?: ContactUsRequestSumAggregateInputType
    _min?: ContactUsRequestMinAggregateInputType
    _max?: ContactUsRequestMaxAggregateInputType
  }

  export type ContactUsRequestGroupByOutputType = {
    id: number
    email: string
    message: string
    sentAt: Date
    _count: ContactUsRequestCountAggregateOutputType | null
    _avg: ContactUsRequestAvgAggregateOutputType | null
    _sum: ContactUsRequestSumAggregateOutputType | null
    _min: ContactUsRequestMinAggregateOutputType | null
    _max: ContactUsRequestMaxAggregateOutputType | null
  }

  type GetContactUsRequestGroupByPayload<T extends ContactUsRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactUsRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactUsRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactUsRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ContactUsRequestGroupByOutputType[P]>
        }
      >
    >


  export type ContactUsRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    message?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["contactUsRequest"]>

  export type ContactUsRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    message?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["contactUsRequest"]>

  export type ContactUsRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    message?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["contactUsRequest"]>

  export type ContactUsRequestSelectScalar = {
    id?: boolean
    email?: boolean
    message?: boolean
    sentAt?: boolean
  }

  export type ContactUsRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "message" | "sentAt", ExtArgs["result"]["contactUsRequest"]>

  export type $ContactUsRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactUsRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      message: string
      sentAt: Date
    }, ExtArgs["result"]["contactUsRequest"]>
    composites: {}
  }

  type ContactUsRequestGetPayload<S extends boolean | null | undefined | ContactUsRequestDefaultArgs> = $Result.GetResult<Prisma.$ContactUsRequestPayload, S>

  type ContactUsRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactUsRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactUsRequestCountAggregateInputType | true
    }

  export interface ContactUsRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactUsRequest'], meta: { name: 'ContactUsRequest' } }
    /**
     * Find zero or one ContactUsRequest that matches the filter.
     * @param {ContactUsRequestFindUniqueArgs} args - Arguments to find a ContactUsRequest
     * @example
     * // Get one ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactUsRequestFindUniqueArgs>(args: SelectSubset<T, ContactUsRequestFindUniqueArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactUsRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactUsRequestFindUniqueOrThrowArgs} args - Arguments to find a ContactUsRequest
     * @example
     * // Get one ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactUsRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactUsRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUsRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestFindFirstArgs} args - Arguments to find a ContactUsRequest
     * @example
     * // Get one ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactUsRequestFindFirstArgs>(args?: SelectSubset<T, ContactUsRequestFindFirstArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactUsRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestFindFirstOrThrowArgs} args - Arguments to find a ContactUsRequest
     * @example
     * // Get one ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactUsRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactUsRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactUsRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactUsRequests
     * const contactUsRequests = await prisma.contactUsRequest.findMany()
     * 
     * // Get first 10 ContactUsRequests
     * const contactUsRequests = await prisma.contactUsRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactUsRequestWithIdOnly = await prisma.contactUsRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactUsRequestFindManyArgs>(args?: SelectSubset<T, ContactUsRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactUsRequest.
     * @param {ContactUsRequestCreateArgs} args - Arguments to create a ContactUsRequest.
     * @example
     * // Create one ContactUsRequest
     * const ContactUsRequest = await prisma.contactUsRequest.create({
     *   data: {
     *     // ... data to create a ContactUsRequest
     *   }
     * })
     * 
     */
    create<T extends ContactUsRequestCreateArgs>(args: SelectSubset<T, ContactUsRequestCreateArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactUsRequests.
     * @param {ContactUsRequestCreateManyArgs} args - Arguments to create many ContactUsRequests.
     * @example
     * // Create many ContactUsRequests
     * const contactUsRequest = await prisma.contactUsRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactUsRequestCreateManyArgs>(args?: SelectSubset<T, ContactUsRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactUsRequests and returns the data saved in the database.
     * @param {ContactUsRequestCreateManyAndReturnArgs} args - Arguments to create many ContactUsRequests.
     * @example
     * // Create many ContactUsRequests
     * const contactUsRequest = await prisma.contactUsRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactUsRequests and only return the `id`
     * const contactUsRequestWithIdOnly = await prisma.contactUsRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactUsRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactUsRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactUsRequest.
     * @param {ContactUsRequestDeleteArgs} args - Arguments to delete one ContactUsRequest.
     * @example
     * // Delete one ContactUsRequest
     * const ContactUsRequest = await prisma.contactUsRequest.delete({
     *   where: {
     *     // ... filter to delete one ContactUsRequest
     *   }
     * })
     * 
     */
    delete<T extends ContactUsRequestDeleteArgs>(args: SelectSubset<T, ContactUsRequestDeleteArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactUsRequest.
     * @param {ContactUsRequestUpdateArgs} args - Arguments to update one ContactUsRequest.
     * @example
     * // Update one ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUsRequestUpdateArgs>(args: SelectSubset<T, ContactUsRequestUpdateArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactUsRequests.
     * @param {ContactUsRequestDeleteManyArgs} args - Arguments to filter ContactUsRequests to delete.
     * @example
     * // Delete a few ContactUsRequests
     * const { count } = await prisma.contactUsRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactUsRequestDeleteManyArgs>(args?: SelectSubset<T, ContactUsRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactUsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactUsRequests
     * const contactUsRequest = await prisma.contactUsRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUsRequestUpdateManyArgs>(args: SelectSubset<T, ContactUsRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactUsRequests and returns the data updated in the database.
     * @param {ContactUsRequestUpdateManyAndReturnArgs} args - Arguments to update many ContactUsRequests.
     * @example
     * // Update many ContactUsRequests
     * const contactUsRequest = await prisma.contactUsRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactUsRequests and only return the `id`
     * const contactUsRequestWithIdOnly = await prisma.contactUsRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUsRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUsRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactUsRequest.
     * @param {ContactUsRequestUpsertArgs} args - Arguments to update or create a ContactUsRequest.
     * @example
     * // Update or create a ContactUsRequest
     * const contactUsRequest = await prisma.contactUsRequest.upsert({
     *   create: {
     *     // ... data to create a ContactUsRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactUsRequest we want to update
     *   }
     * })
     */
    upsert<T extends ContactUsRequestUpsertArgs>(args: SelectSubset<T, ContactUsRequestUpsertArgs<ExtArgs>>): Prisma__ContactUsRequestClient<$Result.GetResult<Prisma.$ContactUsRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactUsRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestCountArgs} args - Arguments to filter ContactUsRequests to count.
     * @example
     * // Count the number of ContactUsRequests
     * const count = await prisma.contactUsRequest.count({
     *   where: {
     *     // ... the filter for the ContactUsRequests we want to count
     *   }
     * })
    **/
    count<T extends ContactUsRequestCountArgs>(
      args?: Subset<T, ContactUsRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactUsRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactUsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactUsRequestAggregateArgs>(args: Subset<T, ContactUsRequestAggregateArgs>): Prisma.PrismaPromise<GetContactUsRequestAggregateType<T>>

    /**
     * Group by ContactUsRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUsRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactUsRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactUsRequestGroupByArgs['orderBy'] }
        : { orderBy?: ContactUsRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactUsRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactUsRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactUsRequest model
   */
  readonly fields: ContactUsRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactUsRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactUsRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactUsRequest model
   */
  interface ContactUsRequestFieldRefs {
    readonly id: FieldRef<"ContactUsRequest", 'Int'>
    readonly email: FieldRef<"ContactUsRequest", 'String'>
    readonly message: FieldRef<"ContactUsRequest", 'String'>
    readonly sentAt: FieldRef<"ContactUsRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactUsRequest findUnique
   */
  export type ContactUsRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter, which ContactUsRequest to fetch.
     */
    where: ContactUsRequestWhereUniqueInput
  }

  /**
   * ContactUsRequest findUniqueOrThrow
   */
  export type ContactUsRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter, which ContactUsRequest to fetch.
     */
    where: ContactUsRequestWhereUniqueInput
  }

  /**
   * ContactUsRequest findFirst
   */
  export type ContactUsRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter, which ContactUsRequest to fetch.
     */
    where?: ContactUsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUsRequests to fetch.
     */
    orderBy?: ContactUsRequestOrderByWithRelationInput | ContactUsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactUsRequests.
     */
    cursor?: ContactUsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactUsRequests.
     */
    distinct?: ContactUsRequestScalarFieldEnum | ContactUsRequestScalarFieldEnum[]
  }

  /**
   * ContactUsRequest findFirstOrThrow
   */
  export type ContactUsRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter, which ContactUsRequest to fetch.
     */
    where?: ContactUsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUsRequests to fetch.
     */
    orderBy?: ContactUsRequestOrderByWithRelationInput | ContactUsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactUsRequests.
     */
    cursor?: ContactUsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUsRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactUsRequests.
     */
    distinct?: ContactUsRequestScalarFieldEnum | ContactUsRequestScalarFieldEnum[]
  }

  /**
   * ContactUsRequest findMany
   */
  export type ContactUsRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter, which ContactUsRequests to fetch.
     */
    where?: ContactUsRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactUsRequests to fetch.
     */
    orderBy?: ContactUsRequestOrderByWithRelationInput | ContactUsRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactUsRequests.
     */
    cursor?: ContactUsRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactUsRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactUsRequests.
     */
    skip?: number
    distinct?: ContactUsRequestScalarFieldEnum | ContactUsRequestScalarFieldEnum[]
  }

  /**
   * ContactUsRequest create
   */
  export type ContactUsRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactUsRequest.
     */
    data: XOR<ContactUsRequestCreateInput, ContactUsRequestUncheckedCreateInput>
  }

  /**
   * ContactUsRequest createMany
   */
  export type ContactUsRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactUsRequests.
     */
    data: ContactUsRequestCreateManyInput | ContactUsRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUsRequest createManyAndReturn
   */
  export type ContactUsRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ContactUsRequests.
     */
    data: ContactUsRequestCreateManyInput | ContactUsRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactUsRequest update
   */
  export type ContactUsRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactUsRequest.
     */
    data: XOR<ContactUsRequestUpdateInput, ContactUsRequestUncheckedUpdateInput>
    /**
     * Choose, which ContactUsRequest to update.
     */
    where: ContactUsRequestWhereUniqueInput
  }

  /**
   * ContactUsRequest updateMany
   */
  export type ContactUsRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactUsRequests.
     */
    data: XOR<ContactUsRequestUpdateManyMutationInput, ContactUsRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactUsRequests to update
     */
    where?: ContactUsRequestWhereInput
    /**
     * Limit how many ContactUsRequests to update.
     */
    limit?: number
  }

  /**
   * ContactUsRequest updateManyAndReturn
   */
  export type ContactUsRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * The data used to update ContactUsRequests.
     */
    data: XOR<ContactUsRequestUpdateManyMutationInput, ContactUsRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactUsRequests to update
     */
    where?: ContactUsRequestWhereInput
    /**
     * Limit how many ContactUsRequests to update.
     */
    limit?: number
  }

  /**
   * ContactUsRequest upsert
   */
  export type ContactUsRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactUsRequest to update in case it exists.
     */
    where: ContactUsRequestWhereUniqueInput
    /**
     * In case the ContactUsRequest found by the `where` argument doesn't exist, create a new ContactUsRequest with this data.
     */
    create: XOR<ContactUsRequestCreateInput, ContactUsRequestUncheckedCreateInput>
    /**
     * In case the ContactUsRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUsRequestUpdateInput, ContactUsRequestUncheckedUpdateInput>
  }

  /**
   * ContactUsRequest delete
   */
  export type ContactUsRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
    /**
     * Filter which ContactUsRequest to delete.
     */
    where: ContactUsRequestWhereUniqueInput
  }

  /**
   * ContactUsRequest deleteMany
   */
  export type ContactUsRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactUsRequests to delete
     */
    where?: ContactUsRequestWhereInput
    /**
     * Limit how many ContactUsRequests to delete.
     */
    limit?: number
  }

  /**
   * ContactUsRequest without action
   */
  export type ContactUsRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactUsRequest
     */
    select?: ContactUsRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactUsRequest
     */
    omit?: ContactUsRequestOmit<ExtArgs> | null
  }


  /**
   * Model InfoPages
   */

  export type AggregateInfoPages = {
    _count: InfoPagesCountAggregateOutputType | null
    _avg: InfoPagesAvgAggregateOutputType | null
    _sum: InfoPagesSumAggregateOutputType | null
    _min: InfoPagesMinAggregateOutputType | null
    _max: InfoPagesMaxAggregateOutputType | null
  }

  export type InfoPagesAvgAggregateOutputType = {
    id: number | null
  }

  export type InfoPagesSumAggregateOutputType = {
    id: number | null
  }

  export type InfoPagesMinAggregateOutputType = {
    id: number | null
    pageName: string | null
    pageBody: string | null
    slug: string | null
  }

  export type InfoPagesMaxAggregateOutputType = {
    id: number | null
    pageName: string | null
    pageBody: string | null
    slug: string | null
  }

  export type InfoPagesCountAggregateOutputType = {
    id: number
    pageName: number
    pageBody: number
    slug: number
    _all: number
  }


  export type InfoPagesAvgAggregateInputType = {
    id?: true
  }

  export type InfoPagesSumAggregateInputType = {
    id?: true
  }

  export type InfoPagesMinAggregateInputType = {
    id?: true
    pageName?: true
    pageBody?: true
    slug?: true
  }

  export type InfoPagesMaxAggregateInputType = {
    id?: true
    pageName?: true
    pageBody?: true
    slug?: true
  }

  export type InfoPagesCountAggregateInputType = {
    id?: true
    pageName?: true
    pageBody?: true
    slug?: true
    _all?: true
  }

  export type InfoPagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoPages to aggregate.
     */
    where?: InfoPagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoPages to fetch.
     */
    orderBy?: InfoPagesOrderByWithRelationInput | InfoPagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InfoPagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InfoPages
    **/
    _count?: true | InfoPagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InfoPagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InfoPagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InfoPagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InfoPagesMaxAggregateInputType
  }

  export type GetInfoPagesAggregateType<T extends InfoPagesAggregateArgs> = {
        [P in keyof T & keyof AggregateInfoPages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInfoPages[P]>
      : GetScalarType<T[P], AggregateInfoPages[P]>
  }




  export type InfoPagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InfoPagesWhereInput
    orderBy?: InfoPagesOrderByWithAggregationInput | InfoPagesOrderByWithAggregationInput[]
    by: InfoPagesScalarFieldEnum[] | InfoPagesScalarFieldEnum
    having?: InfoPagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InfoPagesCountAggregateInputType | true
    _avg?: InfoPagesAvgAggregateInputType
    _sum?: InfoPagesSumAggregateInputType
    _min?: InfoPagesMinAggregateInputType
    _max?: InfoPagesMaxAggregateInputType
  }

  export type InfoPagesGroupByOutputType = {
    id: number
    pageName: string
    pageBody: string
    slug: string
    _count: InfoPagesCountAggregateOutputType | null
    _avg: InfoPagesAvgAggregateOutputType | null
    _sum: InfoPagesSumAggregateOutputType | null
    _min: InfoPagesMinAggregateOutputType | null
    _max: InfoPagesMaxAggregateOutputType | null
  }

  type GetInfoPagesGroupByPayload<T extends InfoPagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InfoPagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InfoPagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InfoPagesGroupByOutputType[P]>
            : GetScalarType<T[P], InfoPagesGroupByOutputType[P]>
        }
      >
    >


  export type InfoPagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageName?: boolean
    pageBody?: boolean
    slug?: boolean
  }, ExtArgs["result"]["infoPages"]>

  export type InfoPagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageName?: boolean
    pageBody?: boolean
    slug?: boolean
  }, ExtArgs["result"]["infoPages"]>

  export type InfoPagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageName?: boolean
    pageBody?: boolean
    slug?: boolean
  }, ExtArgs["result"]["infoPages"]>

  export type InfoPagesSelectScalar = {
    id?: boolean
    pageName?: boolean
    pageBody?: boolean
    slug?: boolean
  }

  export type InfoPagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageName" | "pageBody" | "slug", ExtArgs["result"]["infoPages"]>

  export type $InfoPagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InfoPages"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pageName: string
      pageBody: string
      slug: string
    }, ExtArgs["result"]["infoPages"]>
    composites: {}
  }

  type InfoPagesGetPayload<S extends boolean | null | undefined | InfoPagesDefaultArgs> = $Result.GetResult<Prisma.$InfoPagesPayload, S>

  type InfoPagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InfoPagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InfoPagesCountAggregateInputType | true
    }

  export interface InfoPagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InfoPages'], meta: { name: 'InfoPages' } }
    /**
     * Find zero or one InfoPages that matches the filter.
     * @param {InfoPagesFindUniqueArgs} args - Arguments to find a InfoPages
     * @example
     * // Get one InfoPages
     * const infoPages = await prisma.infoPages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InfoPagesFindUniqueArgs>(args: SelectSubset<T, InfoPagesFindUniqueArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InfoPages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InfoPagesFindUniqueOrThrowArgs} args - Arguments to find a InfoPages
     * @example
     * // Get one InfoPages
     * const infoPages = await prisma.infoPages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InfoPagesFindUniqueOrThrowArgs>(args: SelectSubset<T, InfoPagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesFindFirstArgs} args - Arguments to find a InfoPages
     * @example
     * // Get one InfoPages
     * const infoPages = await prisma.infoPages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InfoPagesFindFirstArgs>(args?: SelectSubset<T, InfoPagesFindFirstArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InfoPages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesFindFirstOrThrowArgs} args - Arguments to find a InfoPages
     * @example
     * // Get one InfoPages
     * const infoPages = await prisma.infoPages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InfoPagesFindFirstOrThrowArgs>(args?: SelectSubset<T, InfoPagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InfoPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InfoPages
     * const infoPages = await prisma.infoPages.findMany()
     * 
     * // Get first 10 InfoPages
     * const infoPages = await prisma.infoPages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const infoPagesWithIdOnly = await prisma.infoPages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InfoPagesFindManyArgs>(args?: SelectSubset<T, InfoPagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InfoPages.
     * @param {InfoPagesCreateArgs} args - Arguments to create a InfoPages.
     * @example
     * // Create one InfoPages
     * const InfoPages = await prisma.infoPages.create({
     *   data: {
     *     // ... data to create a InfoPages
     *   }
     * })
     * 
     */
    create<T extends InfoPagesCreateArgs>(args: SelectSubset<T, InfoPagesCreateArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InfoPages.
     * @param {InfoPagesCreateManyArgs} args - Arguments to create many InfoPages.
     * @example
     * // Create many InfoPages
     * const infoPages = await prisma.infoPages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InfoPagesCreateManyArgs>(args?: SelectSubset<T, InfoPagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InfoPages and returns the data saved in the database.
     * @param {InfoPagesCreateManyAndReturnArgs} args - Arguments to create many InfoPages.
     * @example
     * // Create many InfoPages
     * const infoPages = await prisma.infoPages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InfoPages and only return the `id`
     * const infoPagesWithIdOnly = await prisma.infoPages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InfoPagesCreateManyAndReturnArgs>(args?: SelectSubset<T, InfoPagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InfoPages.
     * @param {InfoPagesDeleteArgs} args - Arguments to delete one InfoPages.
     * @example
     * // Delete one InfoPages
     * const InfoPages = await prisma.infoPages.delete({
     *   where: {
     *     // ... filter to delete one InfoPages
     *   }
     * })
     * 
     */
    delete<T extends InfoPagesDeleteArgs>(args: SelectSubset<T, InfoPagesDeleteArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InfoPages.
     * @param {InfoPagesUpdateArgs} args - Arguments to update one InfoPages.
     * @example
     * // Update one InfoPages
     * const infoPages = await prisma.infoPages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InfoPagesUpdateArgs>(args: SelectSubset<T, InfoPagesUpdateArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InfoPages.
     * @param {InfoPagesDeleteManyArgs} args - Arguments to filter InfoPages to delete.
     * @example
     * // Delete a few InfoPages
     * const { count } = await prisma.infoPages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InfoPagesDeleteManyArgs>(args?: SelectSubset<T, InfoPagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InfoPages
     * const infoPages = await prisma.infoPages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InfoPagesUpdateManyArgs>(args: SelectSubset<T, InfoPagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InfoPages and returns the data updated in the database.
     * @param {InfoPagesUpdateManyAndReturnArgs} args - Arguments to update many InfoPages.
     * @example
     * // Update many InfoPages
     * const infoPages = await prisma.infoPages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InfoPages and only return the `id`
     * const infoPagesWithIdOnly = await prisma.infoPages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InfoPagesUpdateManyAndReturnArgs>(args: SelectSubset<T, InfoPagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InfoPages.
     * @param {InfoPagesUpsertArgs} args - Arguments to update or create a InfoPages.
     * @example
     * // Update or create a InfoPages
     * const infoPages = await prisma.infoPages.upsert({
     *   create: {
     *     // ... data to create a InfoPages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InfoPages we want to update
     *   }
     * })
     */
    upsert<T extends InfoPagesUpsertArgs>(args: SelectSubset<T, InfoPagesUpsertArgs<ExtArgs>>): Prisma__InfoPagesClient<$Result.GetResult<Prisma.$InfoPagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InfoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesCountArgs} args - Arguments to filter InfoPages to count.
     * @example
     * // Count the number of InfoPages
     * const count = await prisma.infoPages.count({
     *   where: {
     *     // ... the filter for the InfoPages we want to count
     *   }
     * })
    **/
    count<T extends InfoPagesCountArgs>(
      args?: Subset<T, InfoPagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InfoPagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InfoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InfoPagesAggregateArgs>(args: Subset<T, InfoPagesAggregateArgs>): Prisma.PrismaPromise<GetInfoPagesAggregateType<T>>

    /**
     * Group by InfoPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InfoPagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InfoPagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InfoPagesGroupByArgs['orderBy'] }
        : { orderBy?: InfoPagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InfoPagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInfoPagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InfoPages model
   */
  readonly fields: InfoPagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InfoPages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InfoPagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InfoPages model
   */
  interface InfoPagesFieldRefs {
    readonly id: FieldRef<"InfoPages", 'Int'>
    readonly pageName: FieldRef<"InfoPages", 'String'>
    readonly pageBody: FieldRef<"InfoPages", 'String'>
    readonly slug: FieldRef<"InfoPages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InfoPages findUnique
   */
  export type InfoPagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter, which InfoPages to fetch.
     */
    where: InfoPagesWhereUniqueInput
  }

  /**
   * InfoPages findUniqueOrThrow
   */
  export type InfoPagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter, which InfoPages to fetch.
     */
    where: InfoPagesWhereUniqueInput
  }

  /**
   * InfoPages findFirst
   */
  export type InfoPagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter, which InfoPages to fetch.
     */
    where?: InfoPagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoPages to fetch.
     */
    orderBy?: InfoPagesOrderByWithRelationInput | InfoPagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoPages.
     */
    cursor?: InfoPagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoPages.
     */
    distinct?: InfoPagesScalarFieldEnum | InfoPagesScalarFieldEnum[]
  }

  /**
   * InfoPages findFirstOrThrow
   */
  export type InfoPagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter, which InfoPages to fetch.
     */
    where?: InfoPagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoPages to fetch.
     */
    orderBy?: InfoPagesOrderByWithRelationInput | InfoPagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InfoPages.
     */
    cursor?: InfoPagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InfoPages.
     */
    distinct?: InfoPagesScalarFieldEnum | InfoPagesScalarFieldEnum[]
  }

  /**
   * InfoPages findMany
   */
  export type InfoPagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter, which InfoPages to fetch.
     */
    where?: InfoPagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InfoPages to fetch.
     */
    orderBy?: InfoPagesOrderByWithRelationInput | InfoPagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InfoPages.
     */
    cursor?: InfoPagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InfoPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InfoPages.
     */
    skip?: number
    distinct?: InfoPagesScalarFieldEnum | InfoPagesScalarFieldEnum[]
  }

  /**
   * InfoPages create
   */
  export type InfoPagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * The data needed to create a InfoPages.
     */
    data: XOR<InfoPagesCreateInput, InfoPagesUncheckedCreateInput>
  }

  /**
   * InfoPages createMany
   */
  export type InfoPagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InfoPages.
     */
    data: InfoPagesCreateManyInput | InfoPagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfoPages createManyAndReturn
   */
  export type InfoPagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * The data used to create many InfoPages.
     */
    data: InfoPagesCreateManyInput | InfoPagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InfoPages update
   */
  export type InfoPagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * The data needed to update a InfoPages.
     */
    data: XOR<InfoPagesUpdateInput, InfoPagesUncheckedUpdateInput>
    /**
     * Choose, which InfoPages to update.
     */
    where: InfoPagesWhereUniqueInput
  }

  /**
   * InfoPages updateMany
   */
  export type InfoPagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InfoPages.
     */
    data: XOR<InfoPagesUpdateManyMutationInput, InfoPagesUncheckedUpdateManyInput>
    /**
     * Filter which InfoPages to update
     */
    where?: InfoPagesWhereInput
    /**
     * Limit how many InfoPages to update.
     */
    limit?: number
  }

  /**
   * InfoPages updateManyAndReturn
   */
  export type InfoPagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * The data used to update InfoPages.
     */
    data: XOR<InfoPagesUpdateManyMutationInput, InfoPagesUncheckedUpdateManyInput>
    /**
     * Filter which InfoPages to update
     */
    where?: InfoPagesWhereInput
    /**
     * Limit how many InfoPages to update.
     */
    limit?: number
  }

  /**
   * InfoPages upsert
   */
  export type InfoPagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * The filter to search for the InfoPages to update in case it exists.
     */
    where: InfoPagesWhereUniqueInput
    /**
     * In case the InfoPages found by the `where` argument doesn't exist, create a new InfoPages with this data.
     */
    create: XOR<InfoPagesCreateInput, InfoPagesUncheckedCreateInput>
    /**
     * In case the InfoPages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InfoPagesUpdateInput, InfoPagesUncheckedUpdateInput>
  }

  /**
   * InfoPages delete
   */
  export type InfoPagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
    /**
     * Filter which InfoPages to delete.
     */
    where: InfoPagesWhereUniqueInput
  }

  /**
   * InfoPages deleteMany
   */
  export type InfoPagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InfoPages to delete
     */
    where?: InfoPagesWhereInput
    /**
     * Limit how many InfoPages to delete.
     */
    limit?: number
  }

  /**
   * InfoPages without action
   */
  export type InfoPagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InfoPages
     */
    select?: InfoPagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InfoPages
     */
    omit?: InfoPagesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    deviceDetails: 'deviceDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletionStatus: 'deletionStatus'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    readyPlayerMeId: 'readyPlayerMeId',
    name: 'name',
    personality: 'personality',
    glbURL: 'glbURL',
    userId: 'userId'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    avatarId: 'avatarId'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    userId: 'userId',
    avatarId: 'avatarId',
    senderType: 'senderType',
    receiverType: 'receiverType',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const DeleteAccountRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type DeleteAccountRequestScalarFieldEnum = (typeof DeleteAccountRequestScalarFieldEnum)[keyof typeof DeleteAccountRequestScalarFieldEnum]


  export const ContactUsRequestScalarFieldEnum: {
    id: 'id',
    email: 'email',
    message: 'message',
    sentAt: 'sentAt'
  };

  export type ContactUsRequestScalarFieldEnum = (typeof ContactUsRequestScalarFieldEnum)[keyof typeof ContactUsRequestScalarFieldEnum]


  export const InfoPagesScalarFieldEnum: {
    id: 'id',
    pageName: 'pageName',
    pageBody: 'pageBody',
    slug: 'slug'
  };

  export type InfoPagesScalarFieldEnum = (typeof InfoPagesScalarFieldEnum)[keyof typeof InfoPagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ParticipantType'
   */
  export type EnumParticipantTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantType'>
    


  /**
   * Reference to a field of type 'ParticipantType[]'
   */
  export type ListEnumParticipantTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deviceDetails?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletionStatus?: BoolFilter<"User"> | boolean
    avatars?: AvatarListRelationFilter
    conversations?: ConversationListRelationFilter
    DeleteAccountRequest?: DeleteAccountRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    deviceDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletionStatus?: SortOrder
    avatars?: AvatarOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    DeleteAccountRequest?: DeleteAccountRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    deviceDetails?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletionStatus?: BoolFilter<"User"> | boolean
    avatars?: AvatarListRelationFilter
    conversations?: ConversationListRelationFilter
    DeleteAccountRequest?: DeleteAccountRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    deviceDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletionStatus?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    deviceDetails?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletionStatus?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    readyPlayerMeId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    personality?: StringFilter<"Avatar"> | string
    glbURL?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
    conversations?: ConversationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    readyPlayerMeId?: SortOrder
    name?: SortOrder
    personality?: SortOrder
    glbURL?: SortOrder
    userId?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    readyPlayerMeId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    personality?: StringFilter<"Avatar"> | string
    glbURL?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
    conversations?: ConversationListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    readyPlayerMeId?: SortOrder
    name?: SortOrder
    personality?: SortOrder
    glbURL?: SortOrder
    userId?: SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _avg?: AvatarAvgOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
    _sum?: AvatarSumOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avatar"> | number
    readyPlayerMeId?: StringWithAggregatesFilter<"Avatar"> | string
    name?: StringWithAggregatesFilter<"Avatar"> | string
    personality?: StringWithAggregatesFilter<"Avatar"> | string
    glbURL?: StringWithAggregatesFilter<"Avatar"> | string
    userId?: IntWithAggregatesFilter<"Avatar"> | number
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    userId?: IntFilter<"Conversation"> | number
    avatarId?: IntFilter<"Conversation"> | number
    messages?: MessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avatar?: XOR<AvatarScalarRelationFilter, AvatarWhereInput>
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    avatar?: AvatarOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userId?: IntFilter<"Conversation"> | number
    avatarId?: IntFilter<"Conversation"> | number
    messages?: MessageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    avatar?: XOR<AvatarScalarRelationFilter, AvatarWhereInput>
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    userId?: IntWithAggregatesFilter<"Conversation"> | number
    avatarId?: IntWithAggregatesFilter<"Conversation"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    userId?: IntNullableFilter<"Message"> | number | null
    avatarId?: IntNullableFilter<"Message"> | number | null
    senderType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    avatarId?: SortOrderInput | SortOrder
    senderType?: SortOrder
    receiverType?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: IntFilter<"Message"> | number
    userId?: IntNullableFilter<"Message"> | number | null
    avatarId?: IntNullableFilter<"Message"> | number | null
    senderType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrderInput | SortOrder
    avatarId?: SortOrderInput | SortOrder
    senderType?: SortOrder
    receiverType?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    conversationId?: IntWithAggregatesFilter<"Message"> | number
    userId?: IntNullableWithAggregatesFilter<"Message"> | number | null
    avatarId?: IntNullableWithAggregatesFilter<"Message"> | number | null
    senderType?: EnumParticipantTypeWithAggregatesFilter<"Message"> | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeWithAggregatesFilter<"Message"> | $Enums.ParticipantType
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type DeleteAccountRequestWhereInput = {
    AND?: DeleteAccountRequestWhereInput | DeleteAccountRequestWhereInput[]
    OR?: DeleteAccountRequestWhereInput[]
    NOT?: DeleteAccountRequestWhereInput | DeleteAccountRequestWhereInput[]
    id?: IntFilter<"DeleteAccountRequest"> | number
    userId?: IntFilter<"DeleteAccountRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeleteAccountRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeleteAccountRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeleteAccountRequestWhereInput | DeleteAccountRequestWhereInput[]
    OR?: DeleteAccountRequestWhereInput[]
    NOT?: DeleteAccountRequestWhereInput | DeleteAccountRequestWhereInput[]
    userId?: IntFilter<"DeleteAccountRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeleteAccountRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: DeleteAccountRequestCountOrderByAggregateInput
    _avg?: DeleteAccountRequestAvgOrderByAggregateInput
    _max?: DeleteAccountRequestMaxOrderByAggregateInput
    _min?: DeleteAccountRequestMinOrderByAggregateInput
    _sum?: DeleteAccountRequestSumOrderByAggregateInput
  }

  export type DeleteAccountRequestScalarWhereWithAggregatesInput = {
    AND?: DeleteAccountRequestScalarWhereWithAggregatesInput | DeleteAccountRequestScalarWhereWithAggregatesInput[]
    OR?: DeleteAccountRequestScalarWhereWithAggregatesInput[]
    NOT?: DeleteAccountRequestScalarWhereWithAggregatesInput | DeleteAccountRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DeleteAccountRequest"> | number
    userId?: IntWithAggregatesFilter<"DeleteAccountRequest"> | number
  }

  export type ContactUsRequestWhereInput = {
    AND?: ContactUsRequestWhereInput | ContactUsRequestWhereInput[]
    OR?: ContactUsRequestWhereInput[]
    NOT?: ContactUsRequestWhereInput | ContactUsRequestWhereInput[]
    id?: IntFilter<"ContactUsRequest"> | number
    email?: StringFilter<"ContactUsRequest"> | string
    message?: StringFilter<"ContactUsRequest"> | string
    sentAt?: DateTimeFilter<"ContactUsRequest"> | Date | string
  }

  export type ContactUsRequestOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactUsRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactUsRequestWhereInput | ContactUsRequestWhereInput[]
    OR?: ContactUsRequestWhereInput[]
    NOT?: ContactUsRequestWhereInput | ContactUsRequestWhereInput[]
    email?: StringFilter<"ContactUsRequest"> | string
    message?: StringFilter<"ContactUsRequest"> | string
    sentAt?: DateTimeFilter<"ContactUsRequest"> | Date | string
  }, "id">

  export type ContactUsRequestOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    _count?: ContactUsRequestCountOrderByAggregateInput
    _avg?: ContactUsRequestAvgOrderByAggregateInput
    _max?: ContactUsRequestMaxOrderByAggregateInput
    _min?: ContactUsRequestMinOrderByAggregateInput
    _sum?: ContactUsRequestSumOrderByAggregateInput
  }

  export type ContactUsRequestScalarWhereWithAggregatesInput = {
    AND?: ContactUsRequestScalarWhereWithAggregatesInput | ContactUsRequestScalarWhereWithAggregatesInput[]
    OR?: ContactUsRequestScalarWhereWithAggregatesInput[]
    NOT?: ContactUsRequestScalarWhereWithAggregatesInput | ContactUsRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactUsRequest"> | number
    email?: StringWithAggregatesFilter<"ContactUsRequest"> | string
    message?: StringWithAggregatesFilter<"ContactUsRequest"> | string
    sentAt?: DateTimeWithAggregatesFilter<"ContactUsRequest"> | Date | string
  }

  export type InfoPagesWhereInput = {
    AND?: InfoPagesWhereInput | InfoPagesWhereInput[]
    OR?: InfoPagesWhereInput[]
    NOT?: InfoPagesWhereInput | InfoPagesWhereInput[]
    id?: IntFilter<"InfoPages"> | number
    pageName?: StringFilter<"InfoPages"> | string
    pageBody?: StringFilter<"InfoPages"> | string
    slug?: StringFilter<"InfoPages"> | string
  }

  export type InfoPagesOrderByWithRelationInput = {
    id?: SortOrder
    pageName?: SortOrder
    pageBody?: SortOrder
    slug?: SortOrder
  }

  export type InfoPagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pageName?: string
    slug?: string
    AND?: InfoPagesWhereInput | InfoPagesWhereInput[]
    OR?: InfoPagesWhereInput[]
    NOT?: InfoPagesWhereInput | InfoPagesWhereInput[]
    pageBody?: StringFilter<"InfoPages"> | string
  }, "id" | "pageName" | "slug">

  export type InfoPagesOrderByWithAggregationInput = {
    id?: SortOrder
    pageName?: SortOrder
    pageBody?: SortOrder
    slug?: SortOrder
    _count?: InfoPagesCountOrderByAggregateInput
    _avg?: InfoPagesAvgOrderByAggregateInput
    _max?: InfoPagesMaxOrderByAggregateInput
    _min?: InfoPagesMinOrderByAggregateInput
    _sum?: InfoPagesSumOrderByAggregateInput
  }

  export type InfoPagesScalarWhereWithAggregatesInput = {
    AND?: InfoPagesScalarWhereWithAggregatesInput | InfoPagesScalarWhereWithAggregatesInput[]
    OR?: InfoPagesScalarWhereWithAggregatesInput[]
    NOT?: InfoPagesScalarWhereWithAggregatesInput | InfoPagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InfoPages"> | number
    pageName?: StringWithAggregatesFilter<"InfoPages"> | string
    pageBody?: StringWithAggregatesFilter<"InfoPages"> | string
    slug?: StringWithAggregatesFilter<"InfoPages"> | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvatarCreateInput = {
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    conversations?: ConversationCreateNestedManyWithoutAvatarInput
    user: UserCreateNestedOneWithoutAvatarsInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    userId: number
    conversations?: ConversationUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUpdateInput = {
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    conversations?: ConversationUpdateManyWithoutAvatarNestedInput
    user?: UserUpdateOneRequiredWithoutAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    conversations?: ConversationUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarCreateManyInput = {
    id?: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    userId: number
  }

  export type AvatarUpdateManyMutationInput = {
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationCreateInput = {
    messages?: MessageCreateNestedManyWithoutConversationInput
    user: UserCreateNestedOneWithoutConversationsInput
    avatar: AvatarCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    userId: number
    avatarId: number
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    messages?: MessageUpdateManyWithoutConversationNestedInput
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    avatarId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: number
    userId: number
    avatarId: number
  }

  export type ConversationUpdateManyMutationInput = {

  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    avatarId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    conversationId: number
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: number
    conversationId: number
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversationId?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeleteAccountRequestCreateInput = {
    user: UserCreateNestedOneWithoutDeleteAccountRequestInput
  }

  export type DeleteAccountRequestUncheckedCreateInput = {
    id?: number
    userId: number
  }

  export type DeleteAccountRequestUpdateInput = {
    user?: UserUpdateOneRequiredWithoutDeleteAccountRequestNestedInput
  }

  export type DeleteAccountRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteAccountRequestCreateManyInput = {
    id?: number
    userId: number
  }

  export type DeleteAccountRequestUpdateManyMutationInput = {

  }

  export type DeleteAccountRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactUsRequestCreateInput = {
    email: string
    message: string
    sentAt?: Date | string
  }

  export type ContactUsRequestUncheckedCreateInput = {
    id?: number
    email: string
    message: string
    sentAt?: Date | string
  }

  export type ContactUsRequestUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsRequestCreateManyInput = {
    id?: number
    email: string
    message: string
    sentAt?: Date | string
  }

  export type ContactUsRequestUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUsRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InfoPagesCreateInput = {
    pageName: string
    pageBody: string
    slug: string
  }

  export type InfoPagesUncheckedCreateInput = {
    id?: number
    pageName: string
    pageBody: string
    slug: string
  }

  export type InfoPagesUpdateInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    pageBody?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type InfoPagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageName?: StringFieldUpdateOperationsInput | string
    pageBody?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type InfoPagesCreateManyInput = {
    id?: number
    pageName: string
    pageBody: string
    slug: string
  }

  export type InfoPagesUpdateManyMutationInput = {
    pageName?: StringFieldUpdateOperationsInput | string
    pageBody?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type InfoPagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pageName?: StringFieldUpdateOperationsInput | string
    pageBody?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AvatarListRelationFilter = {
    every?: AvatarWhereInput
    some?: AvatarWhereInput
    none?: AvatarWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type DeleteAccountRequestListRelationFilter = {
    every?: DeleteAccountRequestWhereInput
    some?: DeleteAccountRequestWhereInput
    none?: DeleteAccountRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeleteAccountRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    deviceDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    readyPlayerMeId?: SortOrder
    name?: SortOrder
    personality?: SortOrder
    glbURL?: SortOrder
    userId?: SortOrder
  }

  export type AvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    readyPlayerMeId?: SortOrder
    name?: SortOrder
    personality?: SortOrder
    glbURL?: SortOrder
    userId?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    readyPlayerMeId?: SortOrder
    name?: SortOrder
    personality?: SortOrder
    glbURL?: SortOrder
    userId?: SortOrder
  }

  export type AvatarSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type AvatarScalarRelationFilter = {
    is?: AvatarWhereInput
    isNot?: AvatarWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumParticipantTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeFilter<$PrismaModel> | $Enums.ParticipantType
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    senderType?: SortOrder
    receiverType?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    senderType?: SortOrder
    receiverType?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
    senderType?: SortOrder
    receiverType?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    avatarId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumParticipantTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantTypeFilter<$PrismaModel>
    _max?: NestedEnumParticipantTypeFilter<$PrismaModel>
  }

  export type DeleteAccountRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeleteAccountRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeleteAccountRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeleteAccountRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DeleteAccountRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactUsRequestCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactUsRequestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactUsRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactUsRequestMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactUsRequestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InfoPagesCountOrderByAggregateInput = {
    id?: SortOrder
    pageName?: SortOrder
    pageBody?: SortOrder
    slug?: SortOrder
  }

  export type InfoPagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InfoPagesMaxOrderByAggregateInput = {
    id?: SortOrder
    pageName?: SortOrder
    pageBody?: SortOrder
    slug?: SortOrder
  }

  export type InfoPagesMinOrderByAggregateInput = {
    id?: SortOrder
    pageName?: SortOrder
    pageBody?: SortOrder
    slug?: SortOrder
  }

  export type InfoPagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvatarCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type DeleteAccountRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput> | DeleteAccountRequestCreateWithoutUserInput[] | DeleteAccountRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteAccountRequestCreateOrConnectWithoutUserInput | DeleteAccountRequestCreateOrConnectWithoutUserInput[]
    createMany?: DeleteAccountRequestCreateManyUserInputEnvelope
    connect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type DeleteAccountRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput> | DeleteAccountRequestCreateWithoutUserInput[] | DeleteAccountRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteAccountRequestCreateOrConnectWithoutUserInput | DeleteAccountRequestCreateOrConnectWithoutUserInput[]
    createMany?: DeleteAccountRequestCreateManyUserInputEnvelope
    connect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AvatarUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type DeleteAccountRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput> | DeleteAccountRequestCreateWithoutUserInput[] | DeleteAccountRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteAccountRequestCreateOrConnectWithoutUserInput | DeleteAccountRequestCreateOrConnectWithoutUserInput[]
    upsert?: DeleteAccountRequestUpsertWithWhereUniqueWithoutUserInput | DeleteAccountRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeleteAccountRequestCreateManyUserInputEnvelope
    set?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    disconnect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    delete?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    connect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    update?: DeleteAccountRequestUpdateWithWhereUniqueWithoutUserInput | DeleteAccountRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeleteAccountRequestUpdateManyWithWhereWithoutUserInput | DeleteAccountRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeleteAccountRequestScalarWhereInput | DeleteAccountRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvatarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type DeleteAccountRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput> | DeleteAccountRequestCreateWithoutUserInput[] | DeleteAccountRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeleteAccountRequestCreateOrConnectWithoutUserInput | DeleteAccountRequestCreateOrConnectWithoutUserInput[]
    upsert?: DeleteAccountRequestUpsertWithWhereUniqueWithoutUserInput | DeleteAccountRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeleteAccountRequestCreateManyUserInputEnvelope
    set?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    disconnect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    delete?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    connect?: DeleteAccountRequestWhereUniqueInput | DeleteAccountRequestWhereUniqueInput[]
    update?: DeleteAccountRequestUpdateWithWhereUniqueWithoutUserInput | DeleteAccountRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeleteAccountRequestUpdateManyWithWhereWithoutUserInput | DeleteAccountRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeleteAccountRequestScalarWhereInput | DeleteAccountRequestScalarWhereInput[]
  }

  export type ConversationCreateNestedManyWithoutAvatarInput = {
    create?: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput> | ConversationCreateWithoutAvatarInput[] | ConversationUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAvatarInput | ConversationCreateOrConnectWithoutAvatarInput[]
    createMany?: ConversationCreateManyAvatarInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAvatarsInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationUncheckedCreateNestedManyWithoutAvatarInput = {
    create?: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput> | ConversationCreateWithoutAvatarInput[] | ConversationUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAvatarInput | ConversationCreateOrConnectWithoutAvatarInput[]
    createMany?: ConversationCreateManyAvatarInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput> | ConversationCreateWithoutAvatarInput[] | ConversationUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAvatarInput | ConversationCreateOrConnectWithoutAvatarInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAvatarInput | ConversationUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: ConversationCreateManyAvatarInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAvatarInput | ConversationUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAvatarInput | ConversationUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutAvatarsNestedInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    upsert?: UserUpsertWithoutAvatarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarsInput, UserUpdateWithoutAvatarsInput>, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type ConversationUncheckedUpdateManyWithoutAvatarNestedInput = {
    create?: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput> | ConversationCreateWithoutAvatarInput[] | ConversationUncheckedCreateWithoutAvatarInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutAvatarInput | ConversationCreateOrConnectWithoutAvatarInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutAvatarInput | ConversationUpsertWithWhereUniqueWithoutAvatarInput[]
    createMany?: ConversationCreateManyAvatarInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutAvatarInput | ConversationUpdateWithWhereUniqueWithoutAvatarInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutAvatarInput | ConversationUpdateManyWithWhereWithoutAvatarInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type AvatarCreateNestedOneWithoutConversationsInput = {
    create?: XOR<AvatarCreateWithoutConversationsInput, AvatarUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutConversationsInput
    connect?: AvatarWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type AvatarUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<AvatarCreateWithoutConversationsInput, AvatarUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: AvatarCreateOrConnectWithoutConversationsInput
    upsert?: AvatarUpsertWithoutConversationsInput
    connect?: AvatarWhereUniqueInput
    update?: XOR<XOR<AvatarUpdateToOneWithWhereWithoutConversationsInput, AvatarUpdateWithoutConversationsInput>, AvatarUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumParticipantTypeFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantType
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutDeleteAccountRequestInput = {
    create?: XOR<UserCreateWithoutDeleteAccountRequestInput, UserUncheckedCreateWithoutDeleteAccountRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleteAccountRequestInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDeleteAccountRequestNestedInput = {
    create?: XOR<UserCreateWithoutDeleteAccountRequestInput, UserUncheckedCreateWithoutDeleteAccountRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeleteAccountRequestInput
    upsert?: UserUpsertWithoutDeleteAccountRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeleteAccountRequestInput, UserUpdateWithoutDeleteAccountRequestInput>, UserUncheckedUpdateWithoutDeleteAccountRequestInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumParticipantTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeFilter<$PrismaModel> | $Enums.ParticipantType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantType | EnumParticipantTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantType[] | ListEnumParticipantTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantTypeWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantTypeFilter<$PrismaModel>
    _max?: NestedEnumParticipantTypeFilter<$PrismaModel>
  }

  export type AvatarCreateWithoutUserInput = {
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    conversations?: ConversationCreateNestedManyWithoutAvatarInput
  }

  export type AvatarUncheckedCreateWithoutUserInput = {
    id?: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    conversations?: ConversationUncheckedCreateNestedManyWithoutAvatarInput
  }

  export type AvatarCreateOrConnectWithoutUserInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarCreateManyUserInputEnvelope = {
    data: AvatarCreateManyUserInput | AvatarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUserInput = {
    messages?: MessageCreateNestedManyWithoutConversationInput
    avatar: AvatarCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: number
    avatarId: number
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeleteAccountRequestCreateWithoutUserInput = {

  }

  export type DeleteAccountRequestUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type DeleteAccountRequestCreateOrConnectWithoutUserInput = {
    where: DeleteAccountRequestWhereUniqueInput
    create: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput>
  }

  export type DeleteAccountRequestCreateManyUserInputEnvelope = {
    data: DeleteAccountRequestCreateManyUserInput | DeleteAccountRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AvatarUpsertWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUpdateManyWithWhereWithoutUserInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutUserInput>
  }

  export type AvatarScalarWhereInput = {
    AND?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    OR?: AvatarScalarWhereInput[]
    NOT?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    id?: IntFilter<"Avatar"> | number
    readyPlayerMeId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    personality?: StringFilter<"Avatar"> | string
    glbURL?: StringFilter<"Avatar"> | string
    userId?: IntFilter<"Avatar"> | number
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    userId?: IntFilter<"Conversation"> | number
    avatarId?: IntFilter<"Conversation"> | number
  }

  export type DeleteAccountRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: DeleteAccountRequestWhereUniqueInput
    update: XOR<DeleteAccountRequestUpdateWithoutUserInput, DeleteAccountRequestUncheckedUpdateWithoutUserInput>
    create: XOR<DeleteAccountRequestCreateWithoutUserInput, DeleteAccountRequestUncheckedCreateWithoutUserInput>
  }

  export type DeleteAccountRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: DeleteAccountRequestWhereUniqueInput
    data: XOR<DeleteAccountRequestUpdateWithoutUserInput, DeleteAccountRequestUncheckedUpdateWithoutUserInput>
  }

  export type DeleteAccountRequestUpdateManyWithWhereWithoutUserInput = {
    where: DeleteAccountRequestScalarWhereInput
    data: XOR<DeleteAccountRequestUpdateManyMutationInput, DeleteAccountRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type DeleteAccountRequestScalarWhereInput = {
    AND?: DeleteAccountRequestScalarWhereInput | DeleteAccountRequestScalarWhereInput[]
    OR?: DeleteAccountRequestScalarWhereInput[]
    NOT?: DeleteAccountRequestScalarWhereInput | DeleteAccountRequestScalarWhereInput[]
    id?: IntFilter<"DeleteAccountRequest"> | number
    userId?: IntFilter<"DeleteAccountRequest"> | number
  }

  export type ConversationCreateWithoutAvatarInput = {
    messages?: MessageCreateNestedManyWithoutConversationInput
    user: UserCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutAvatarInput = {
    id?: number
    userId: number
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutAvatarInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput>
  }

  export type ConversationCreateManyAvatarInputEnvelope = {
    data: ConversationCreateManyAvatarInput | ConversationCreateManyAvatarInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAvatarsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    conversations?: ConversationCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvatarsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvatarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutAvatarInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutAvatarInput, ConversationUncheckedUpdateWithoutAvatarInput>
    create: XOR<ConversationCreateWithoutAvatarInput, ConversationUncheckedCreateWithoutAvatarInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutAvatarInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutAvatarInput, ConversationUncheckedUpdateWithoutAvatarInput>
  }

  export type ConversationUpdateManyWithWhereWithoutAvatarInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutAvatarInput>
  }

  export type UserUpsertWithoutAvatarsInput = {
    update: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type UserUpdateWithoutAvatarsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutConversationInput = {
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: number
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutConversationsInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type AvatarCreateWithoutConversationsInput = {
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    user: UserCreateNestedOneWithoutAvatarsInput
  }

  export type AvatarUncheckedCreateWithoutConversationsInput = {
    id?: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
    userId: number
  }

  export type AvatarCreateOrConnectWithoutConversationsInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutConversationsInput, AvatarUncheckedCreateWithoutConversationsInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    conversationId?: IntFilter<"Message"> | number
    userId?: IntNullableFilter<"Message"> | number | null
    avatarId?: IntNullableFilter<"Message"> | number | null
    senderType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFilter<"Message"> | $Enums.ParticipantType
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    DeleteAccountRequest?: DeleteAccountRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvatarUpsertWithoutConversationsInput = {
    update: XOR<AvatarUpdateWithoutConversationsInput, AvatarUncheckedUpdateWithoutConversationsInput>
    create: XOR<AvatarCreateWithoutConversationsInput, AvatarUncheckedCreateWithoutConversationsInput>
    where?: AvatarWhereInput
  }

  export type AvatarUpdateToOneWithWhereWithoutConversationsInput = {
    where?: AvatarWhereInput
    data: XOR<AvatarUpdateWithoutConversationsInput, AvatarUncheckedUpdateWithoutConversationsInput>
  }

  export type AvatarUpdateWithoutConversationsInput = {
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationCreateWithoutMessagesInput = {
    user: UserCreateNestedOneWithoutConversationsInput
    avatar: AvatarCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: number
    userId: number
    avatarId: number
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    avatarId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutDeleteAccountRequestInput = {
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeleteAccountRequestInput = {
    id?: number
    email: string
    password: string
    name: string
    role: $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    deletionStatus?: boolean
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeleteAccountRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeleteAccountRequestInput, UserUncheckedCreateWithoutDeleteAccountRequestInput>
  }

  export type UserUpsertWithoutDeleteAccountRequestInput = {
    update: XOR<UserUpdateWithoutDeleteAccountRequestInput, UserUncheckedUpdateWithoutDeleteAccountRequestInput>
    create: XOR<UserCreateWithoutDeleteAccountRequestInput, UserUncheckedCreateWithoutDeleteAccountRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeleteAccountRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeleteAccountRequestInput, UserUncheckedUpdateWithoutDeleteAccountRequestInput>
  }

  export type UserUpdateWithoutDeleteAccountRequestInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeleteAccountRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    deviceDetails?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: BoolFieldUpdateOperationsInput | boolean
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvatarCreateManyUserInput = {
    id?: number
    readyPlayerMeId: string
    name: string
    personality: string
    glbURL: string
  }

  export type ConversationCreateManyUserInput = {
    id?: number
    avatarId: number
  }

  export type DeleteAccountRequestCreateManyUserInput = {
    id?: number
  }

  export type AvatarUpdateWithoutUserInput = {
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    conversations?: ConversationUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
    conversations?: ConversationUncheckedUpdateManyWithoutAvatarNestedInput
  }

  export type AvatarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    readyPlayerMeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    glbURL?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutUserInput = {
    messages?: MessageUpdateManyWithoutConversationNestedInput
    avatar?: AvatarUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarId?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteAccountRequestUpdateWithoutUserInput = {

  }

  export type DeleteAccountRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type DeleteAccountRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationCreateManyAvatarInput = {
    id?: number
    userId: number
  }

  export type ConversationUpdateWithoutAvatarInput = {
    messages?: MessageUpdateManyWithoutConversationNestedInput
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyConversationInput = {
    id?: number
    userId?: number | null
    avatarId?: number | null
    senderType: $Enums.ParticipantType
    receiverType: $Enums.ParticipantType
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    senderType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    receiverType?: EnumParticipantTypeFieldUpdateOperationsInput | $Enums.ParticipantType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}