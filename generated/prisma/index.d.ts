
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
 * Model app_user
 * 
 */
export type app_user = $Result.DefaultSelection<Prisma.$app_userPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model user_pref
 * 
 */
export type user_pref = $Result.DefaultSelection<Prisma.$user_prefPayload>
/**
 * Model listing
 * 
 */
export type listing = $Result.DefaultSelection<Prisma.$listingPayload>
/**
 * Model listing_photo
 * 
 */
export type listing_photo = $Result.DefaultSelection<Prisma.$listing_photoPayload>
/**
 * Model claim
 * 
 */
export type claim = $Result.DefaultSelection<Prisma.$claimPayload>
/**
 * Model notification
 * 
 */
export type notification = $Result.DefaultSelection<Prisma.$notificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more App_users
 * const app_users = await prisma.app_user.findMany()
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
   * // Fetch zero or more App_users
   * const app_users = await prisma.app_user.findMany()
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
   * `prisma.app_user`: Exposes CRUD operations for the **app_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more App_users
    * const app_users = await prisma.app_user.findMany()
    * ```
    */
  get app_user(): Prisma.app_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_pref`: Exposes CRUD operations for the **user_pref** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_prefs
    * const user_prefs = await prisma.user_pref.findMany()
    * ```
    */
  get user_pref(): Prisma.user_prefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.listingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing_photo`: Exposes CRUD operations for the **listing_photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listing_photos
    * const listing_photos = await prisma.listing_photo.findMany()
    * ```
    */
  get listing_photo(): Prisma.listing_photoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.claimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.notificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    app_user: 'app_user',
    category: 'category',
    user_pref: 'user_pref',
    listing: 'listing',
    listing_photo: 'listing_photo',
    claim: 'claim',
    notification: 'notification'
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
      modelProps: "app_user" | "category" | "user_pref" | "listing" | "listing_photo" | "claim" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      app_user: {
        payload: Prisma.$app_userPayload<ExtArgs>
        fields: Prisma.app_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.app_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.app_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          findFirst: {
            args: Prisma.app_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.app_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          findMany: {
            args: Prisma.app_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>[]
          }
          create: {
            args: Prisma.app_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          createMany: {
            args: Prisma.app_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.app_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>[]
          }
          delete: {
            args: Prisma.app_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          update: {
            args: Prisma.app_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          deleteMany: {
            args: Prisma.app_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.app_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.app_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>[]
          }
          upsert: {
            args: Prisma.app_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$app_userPayload>
          }
          aggregate: {
            args: Prisma.App_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp_user>
          }
          groupBy: {
            args: Prisma.app_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<App_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.app_userCountArgs<ExtArgs>
            result: $Utils.Optional<App_userCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      user_pref: {
        payload: Prisma.$user_prefPayload<ExtArgs>
        fields: Prisma.user_prefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_prefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_prefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          findFirst: {
            args: Prisma.user_prefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_prefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          findMany: {
            args: Prisma.user_prefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>[]
          }
          create: {
            args: Prisma.user_prefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          createMany: {
            args: Prisma.user_prefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_prefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>[]
          }
          delete: {
            args: Prisma.user_prefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          update: {
            args: Prisma.user_prefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          deleteMany: {
            args: Prisma.user_prefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_prefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_prefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>[]
          }
          upsert: {
            args: Prisma.user_prefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_prefPayload>
          }
          aggregate: {
            args: Prisma.User_prefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_pref>
          }
          groupBy: {
            args: Prisma.user_prefGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_prefGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_prefCountArgs<ExtArgs>
            result: $Utils.Optional<User_prefCountAggregateOutputType> | number
          }
        }
      }
      listing: {
        payload: Prisma.$listingPayload<ExtArgs>
        fields: Prisma.listingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          findFirst: {
            args: Prisma.listingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          findMany: {
            args: Prisma.listingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>[]
          }
          create: {
            args: Prisma.listingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          createMany: {
            args: Prisma.listingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>[]
          }
          delete: {
            args: Prisma.listingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          update: {
            args: Prisma.listingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          deleteMany: {
            args: Prisma.listingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.listingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>[]
          }
          upsert: {
            args: Prisma.listingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.listingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.listingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      listing_photo: {
        payload: Prisma.$listing_photoPayload<ExtArgs>
        fields: Prisma.listing_photoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listing_photoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listing_photoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          findFirst: {
            args: Prisma.listing_photoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listing_photoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          findMany: {
            args: Prisma.listing_photoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>[]
          }
          create: {
            args: Prisma.listing_photoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          createMany: {
            args: Prisma.listing_photoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listing_photoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>[]
          }
          delete: {
            args: Prisma.listing_photoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          update: {
            args: Prisma.listing_photoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          deleteMany: {
            args: Prisma.listing_photoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listing_photoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.listing_photoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>[]
          }
          upsert: {
            args: Prisma.listing_photoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listing_photoPayload>
          }
          aggregate: {
            args: Prisma.Listing_photoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing_photo>
          }
          groupBy: {
            args: Prisma.listing_photoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Listing_photoGroupByOutputType>[]
          }
          count: {
            args: Prisma.listing_photoCountArgs<ExtArgs>
            result: $Utils.Optional<Listing_photoCountAggregateOutputType> | number
          }
        }
      }
      claim: {
        payload: Prisma.$claimPayload<ExtArgs>
        fields: Prisma.claimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.claimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.claimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          findFirst: {
            args: Prisma.claimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.claimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          findMany: {
            args: Prisma.claimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          create: {
            args: Prisma.claimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          createMany: {
            args: Prisma.claimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.claimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          delete: {
            args: Prisma.claimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          update: {
            args: Prisma.claimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          deleteMany: {
            args: Prisma.claimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.claimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.claimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>[]
          }
          upsert: {
            args: Prisma.claimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$claimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.claimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.claimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      notification: {
        payload: Prisma.$notificationPayload<ExtArgs>
        fields: Prisma.notificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findFirst: {
            args: Prisma.notificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          findMany: {
            args: Prisma.notificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          create: {
            args: Prisma.notificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          createMany: {
            args: Prisma.notificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          delete: {
            args: Prisma.notificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          update: {
            args: Prisma.notificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          deleteMany: {
            args: Prisma.notificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>[]
          }
          upsert: {
            args: Prisma.notificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.notificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    app_user?: app_userOmit
    category?: categoryOmit
    user_pref?: user_prefOmit
    listing?: listingOmit
    listing_photo?: listing_photoOmit
    claim?: claimOmit
    notification?: notificationOmit
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
   * Count Type App_userCountOutputType
   */

  export type App_userCountOutputType = {
    claims: number
    listings: number
    notifications: number
  }

  export type App_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | App_userCountOutputTypeCountClaimsArgs
    listings?: boolean | App_userCountOutputTypeCountListingsArgs
    notifications?: boolean | App_userCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * App_userCountOutputType without action
   */
  export type App_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App_userCountOutputType
     */
    select?: App_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * App_userCountOutputType without action
   */
  export type App_userCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
  }

  /**
   * App_userCountOutputType without action
   */
  export type App_userCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingWhereInput
  }

  /**
   * App_userCountOutputType without action
   */
  export type App_userCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    listings: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | CategoryCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    claims: number
    photos: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | ListingCountOutputTypeCountClaimsArgs
    photos?: boolean | ListingCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listing_photoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model app_user
   */

  export type AggregateApp_user = {
    _count: App_userCountAggregateOutputType | null
    _avg: App_userAvgAggregateOutputType | null
    _sum: App_userSumAggregateOutputType | null
    _min: App_userMinAggregateOutputType | null
    _max: App_userMaxAggregateOutputType | null
  }

  export type App_userAvgAggregateOutputType = {
    points: number | null
  }

  export type App_userSumAggregateOutputType = {
    points: number | null
  }

  export type App_userMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type App_userMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    points: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type App_userCountAggregateOutputType = {
    id: number
    email: number
    username: number
    points: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type App_userAvgAggregateInputType = {
    points?: true
  }

  export type App_userSumAggregateInputType = {
    points?: true
  }

  export type App_userMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type App_userMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    points?: true
    created_at?: true
    updated_at?: true
  }

  export type App_userCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    points?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type App_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_user to aggregate.
     */
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     */
    orderBy?: app_userOrderByWithRelationInput | app_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned app_users
    **/
    _count?: true | App_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: App_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: App_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: App_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: App_userMaxAggregateInputType
  }

  export type GetApp_userAggregateType<T extends App_userAggregateArgs> = {
        [P in keyof T & keyof AggregateApp_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp_user[P]>
      : GetScalarType<T[P], AggregateApp_user[P]>
  }




  export type app_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: app_userWhereInput
    orderBy?: app_userOrderByWithAggregationInput | app_userOrderByWithAggregationInput[]
    by: App_userScalarFieldEnum[] | App_userScalarFieldEnum
    having?: app_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: App_userCountAggregateInputType | true
    _avg?: App_userAvgAggregateInputType
    _sum?: App_userSumAggregateInputType
    _min?: App_userMinAggregateInputType
    _max?: App_userMaxAggregateInputType
  }

  export type App_userGroupByOutputType = {
    id: string
    email: string | null
    username: string | null
    points: number
    created_at: Date
    updated_at: Date
    _count: App_userCountAggregateOutputType | null
    _avg: App_userAvgAggregateOutputType | null
    _sum: App_userSumAggregateOutputType | null
    _min: App_userMinAggregateOutputType | null
    _max: App_userMaxAggregateOutputType | null
  }

  type GetApp_userGroupByPayload<T extends app_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<App_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof App_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], App_userGroupByOutputType[P]>
            : GetScalarType<T[P], App_userGroupByOutputType[P]>
        }
      >
    >


  export type app_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
    claims?: boolean | app_user$claimsArgs<ExtArgs>
    listings?: boolean | app_user$listingsArgs<ExtArgs>
    notifications?: boolean | app_user$notificationsArgs<ExtArgs>
    user_pref?: boolean | app_user$user_prefArgs<ExtArgs>
    _count?: boolean | App_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app_user"]>

  export type app_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["app_user"]>

  export type app_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["app_user"]>

  export type app_userSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    points?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type app_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "points" | "created_at" | "updated_at", ExtArgs["result"]["app_user"]>
  export type app_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | app_user$claimsArgs<ExtArgs>
    listings?: boolean | app_user$listingsArgs<ExtArgs>
    notifications?: boolean | app_user$notificationsArgs<ExtArgs>
    user_pref?: boolean | app_user$user_prefArgs<ExtArgs>
    _count?: boolean | App_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type app_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type app_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $app_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "app_user"
    objects: {
      claims: Prisma.$claimPayload<ExtArgs>[]
      listings: Prisma.$listingPayload<ExtArgs>[]
      notifications: Prisma.$notificationPayload<ExtArgs>[]
      user_pref: Prisma.$user_prefPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      username: string | null
      points: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["app_user"]>
    composites: {}
  }

  type app_userGetPayload<S extends boolean | null | undefined | app_userDefaultArgs> = $Result.GetResult<Prisma.$app_userPayload, S>

  type app_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<app_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: App_userCountAggregateInputType | true
    }

  export interface app_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['app_user'], meta: { name: 'app_user' } }
    /**
     * Find zero or one App_user that matches the filter.
     * @param {app_userFindUniqueArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends app_userFindUniqueArgs>(args: SelectSubset<T, app_userFindUniqueArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one App_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {app_userFindUniqueOrThrowArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends app_userFindUniqueOrThrowArgs>(args: SelectSubset<T, app_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userFindFirstArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends app_userFindFirstArgs>(args?: SelectSubset<T, app_userFindFirstArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first App_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userFindFirstOrThrowArgs} args - Arguments to find a App_user
     * @example
     * // Get one App_user
     * const app_user = await prisma.app_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends app_userFindFirstOrThrowArgs>(args?: SelectSubset<T, app_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more App_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all App_users
     * const app_users = await prisma.app_user.findMany()
     * 
     * // Get first 10 App_users
     * const app_users = await prisma.app_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const app_userWithIdOnly = await prisma.app_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends app_userFindManyArgs>(args?: SelectSubset<T, app_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a App_user.
     * @param {app_userCreateArgs} args - Arguments to create a App_user.
     * @example
     * // Create one App_user
     * const App_user = await prisma.app_user.create({
     *   data: {
     *     // ... data to create a App_user
     *   }
     * })
     * 
     */
    create<T extends app_userCreateArgs>(args: SelectSubset<T, app_userCreateArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many App_users.
     * @param {app_userCreateManyArgs} args - Arguments to create many App_users.
     * @example
     * // Create many App_users
     * const app_user = await prisma.app_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends app_userCreateManyArgs>(args?: SelectSubset<T, app_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many App_users and returns the data saved in the database.
     * @param {app_userCreateManyAndReturnArgs} args - Arguments to create many App_users.
     * @example
     * // Create many App_users
     * const app_user = await prisma.app_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many App_users and only return the `id`
     * const app_userWithIdOnly = await prisma.app_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends app_userCreateManyAndReturnArgs>(args?: SelectSubset<T, app_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a App_user.
     * @param {app_userDeleteArgs} args - Arguments to delete one App_user.
     * @example
     * // Delete one App_user
     * const App_user = await prisma.app_user.delete({
     *   where: {
     *     // ... filter to delete one App_user
     *   }
     * })
     * 
     */
    delete<T extends app_userDeleteArgs>(args: SelectSubset<T, app_userDeleteArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one App_user.
     * @param {app_userUpdateArgs} args - Arguments to update one App_user.
     * @example
     * // Update one App_user
     * const app_user = await prisma.app_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends app_userUpdateArgs>(args: SelectSubset<T, app_userUpdateArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more App_users.
     * @param {app_userDeleteManyArgs} args - Arguments to filter App_users to delete.
     * @example
     * // Delete a few App_users
     * const { count } = await prisma.app_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends app_userDeleteManyArgs>(args?: SelectSubset<T, app_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many App_users
     * const app_user = await prisma.app_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends app_userUpdateManyArgs>(args: SelectSubset<T, app_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more App_users and returns the data updated in the database.
     * @param {app_userUpdateManyAndReturnArgs} args - Arguments to update many App_users.
     * @example
     * // Update many App_users
     * const app_user = await prisma.app_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more App_users and only return the `id`
     * const app_userWithIdOnly = await prisma.app_user.updateManyAndReturn({
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
    updateManyAndReturn<T extends app_userUpdateManyAndReturnArgs>(args: SelectSubset<T, app_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one App_user.
     * @param {app_userUpsertArgs} args - Arguments to update or create a App_user.
     * @example
     * // Update or create a App_user
     * const app_user = await prisma.app_user.upsert({
     *   create: {
     *     // ... data to create a App_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App_user we want to update
     *   }
     * })
     */
    upsert<T extends app_userUpsertArgs>(args: SelectSubset<T, app_userUpsertArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of App_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userCountArgs} args - Arguments to filter App_users to count.
     * @example
     * // Count the number of App_users
     * const count = await prisma.app_user.count({
     *   where: {
     *     // ... the filter for the App_users we want to count
     *   }
     * })
    **/
    count<T extends app_userCountArgs>(
      args?: Subset<T, app_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], App_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {App_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends App_userAggregateArgs>(args: Subset<T, App_userAggregateArgs>): Prisma.PrismaPromise<GetApp_userAggregateType<T>>

    /**
     * Group by App_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {app_userGroupByArgs} args - Group by arguments.
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
      T extends app_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: app_userGroupByArgs['orderBy'] }
        : { orderBy?: app_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, app_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApp_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the app_user model
   */
  readonly fields: app_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for app_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__app_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends app_user$claimsArgs<ExtArgs> = {}>(args?: Subset<T, app_user$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listings<T extends app_user$listingsArgs<ExtArgs> = {}>(args?: Subset<T, app_user$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends app_user$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, app_user$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_pref<T extends app_user$user_prefArgs<ExtArgs> = {}>(args?: Subset<T, app_user$user_prefArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the app_user model
   */
  interface app_userFieldRefs {
    readonly id: FieldRef<"app_user", 'String'>
    readonly email: FieldRef<"app_user", 'String'>
    readonly username: FieldRef<"app_user", 'String'>
    readonly points: FieldRef<"app_user", 'Int'>
    readonly created_at: FieldRef<"app_user", 'DateTime'>
    readonly updated_at: FieldRef<"app_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * app_user findUnique
   */
  export type app_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter, which app_user to fetch.
     */
    where: app_userWhereUniqueInput
  }

  /**
   * app_user findUniqueOrThrow
   */
  export type app_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter, which app_user to fetch.
     */
    where: app_userWhereUniqueInput
  }

  /**
   * app_user findFirst
   */
  export type app_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter, which app_user to fetch.
     */
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     */
    orderBy?: app_userOrderByWithRelationInput | app_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_users.
     */
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_users.
     */
    distinct?: App_userScalarFieldEnum | App_userScalarFieldEnum[]
  }

  /**
   * app_user findFirstOrThrow
   */
  export type app_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter, which app_user to fetch.
     */
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     */
    orderBy?: app_userOrderByWithRelationInput | app_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for app_users.
     */
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of app_users.
     */
    distinct?: App_userScalarFieldEnum | App_userScalarFieldEnum[]
  }

  /**
   * app_user findMany
   */
  export type app_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter, which app_users to fetch.
     */
    where?: app_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of app_users to fetch.
     */
    orderBy?: app_userOrderByWithRelationInput | app_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing app_users.
     */
    cursor?: app_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` app_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` app_users.
     */
    skip?: number
    distinct?: App_userScalarFieldEnum | App_userScalarFieldEnum[]
  }

  /**
   * app_user create
   */
  export type app_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * The data needed to create a app_user.
     */
    data: XOR<app_userCreateInput, app_userUncheckedCreateInput>
  }

  /**
   * app_user createMany
   */
  export type app_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many app_users.
     */
    data: app_userCreateManyInput | app_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_user createManyAndReturn
   */
  export type app_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * The data used to create many app_users.
     */
    data: app_userCreateManyInput | app_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * app_user update
   */
  export type app_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * The data needed to update a app_user.
     */
    data: XOR<app_userUpdateInput, app_userUncheckedUpdateInput>
    /**
     * Choose, which app_user to update.
     */
    where: app_userWhereUniqueInput
  }

  /**
   * app_user updateMany
   */
  export type app_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update app_users.
     */
    data: XOR<app_userUpdateManyMutationInput, app_userUncheckedUpdateManyInput>
    /**
     * Filter which app_users to update
     */
    where?: app_userWhereInput
    /**
     * Limit how many app_users to update.
     */
    limit?: number
  }

  /**
   * app_user updateManyAndReturn
   */
  export type app_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * The data used to update app_users.
     */
    data: XOR<app_userUpdateManyMutationInput, app_userUncheckedUpdateManyInput>
    /**
     * Filter which app_users to update
     */
    where?: app_userWhereInput
    /**
     * Limit how many app_users to update.
     */
    limit?: number
  }

  /**
   * app_user upsert
   */
  export type app_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * The filter to search for the app_user to update in case it exists.
     */
    where: app_userWhereUniqueInput
    /**
     * In case the app_user found by the `where` argument doesn't exist, create a new app_user with this data.
     */
    create: XOR<app_userCreateInput, app_userUncheckedCreateInput>
    /**
     * In case the app_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<app_userUpdateInput, app_userUncheckedUpdateInput>
  }

  /**
   * app_user delete
   */
  export type app_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
    /**
     * Filter which app_user to delete.
     */
    where: app_userWhereUniqueInput
  }

  /**
   * app_user deleteMany
   */
  export type app_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which app_users to delete
     */
    where?: app_userWhereInput
    /**
     * Limit how many app_users to delete.
     */
    limit?: number
  }

  /**
   * app_user.claims
   */
  export type app_user$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    where?: claimWhereInput
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    cursor?: claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * app_user.listings
   */
  export type app_user$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    where?: listingWhereInput
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    cursor?: listingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * app_user.notifications
   */
  export type app_user$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    cursor?: notificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * app_user.user_pref
   */
  export type app_user$user_prefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    where?: user_prefWhereInput
  }

  /**
   * app_user without action
   */
  export type app_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the app_user
     */
    select?: app_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the app_user
     */
    omit?: app_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: app_userInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    listings?: boolean | category$listingsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | category$listingsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      listings: Prisma.$listingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends category$listingsArgs<ExtArgs> = {}>(args?: Subset<T, category$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.listings
   */
  export type category$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    where?: listingWhereInput
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    cursor?: listingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model user_pref
   */

  export type AggregateUser_pref = {
    _count: User_prefCountAggregateOutputType | null
    _avg: User_prefAvgAggregateOutputType | null
    _sum: User_prefSumAggregateOutputType | null
    _min: User_prefMinAggregateOutputType | null
    _max: User_prefMaxAggregateOutputType | null
  }

  export type User_prefAvgAggregateOutputType = {
    radius_meters: number | null
  }

  export type User_prefSumAggregateOutputType = {
    radius_meters: number | null
  }

  export type User_prefMinAggregateOutputType = {
    user_id: string | null
    notifications_on: boolean | null
    radius_meters: number | null
    dark_mode: boolean | null
    updated_at: Date | null
  }

  export type User_prefMaxAggregateOutputType = {
    user_id: string | null
    notifications_on: boolean | null
    radius_meters: number | null
    dark_mode: boolean | null
    updated_at: Date | null
  }

  export type User_prefCountAggregateOutputType = {
    user_id: number
    notifications_on: number
    radius_meters: number
    category_filter: number
    dark_mode: number
    updated_at: number
    _all: number
  }


  export type User_prefAvgAggregateInputType = {
    radius_meters?: true
  }

  export type User_prefSumAggregateInputType = {
    radius_meters?: true
  }

  export type User_prefMinAggregateInputType = {
    user_id?: true
    notifications_on?: true
    radius_meters?: true
    dark_mode?: true
    updated_at?: true
  }

  export type User_prefMaxAggregateInputType = {
    user_id?: true
    notifications_on?: true
    radius_meters?: true
    dark_mode?: true
    updated_at?: true
  }

  export type User_prefCountAggregateInputType = {
    user_id?: true
    notifications_on?: true
    radius_meters?: true
    category_filter?: true
    dark_mode?: true
    updated_at?: true
    _all?: true
  }

  export type User_prefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_pref to aggregate.
     */
    where?: user_prefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_prefs to fetch.
     */
    orderBy?: user_prefOrderByWithRelationInput | user_prefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_prefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_prefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_prefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_prefs
    **/
    _count?: true | User_prefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_prefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_prefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_prefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_prefMaxAggregateInputType
  }

  export type GetUser_prefAggregateType<T extends User_prefAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_pref]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_pref[P]>
      : GetScalarType<T[P], AggregateUser_pref[P]>
  }




  export type user_prefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_prefWhereInput
    orderBy?: user_prefOrderByWithAggregationInput | user_prefOrderByWithAggregationInput[]
    by: User_prefScalarFieldEnum[] | User_prefScalarFieldEnum
    having?: user_prefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_prefCountAggregateInputType | true
    _avg?: User_prefAvgAggregateInputType
    _sum?: User_prefSumAggregateInputType
    _min?: User_prefMinAggregateInputType
    _max?: User_prefMaxAggregateInputType
  }

  export type User_prefGroupByOutputType = {
    user_id: string
    notifications_on: boolean
    radius_meters: number
    category_filter: string[]
    dark_mode: boolean
    updated_at: Date
    _count: User_prefCountAggregateOutputType | null
    _avg: User_prefAvgAggregateOutputType | null
    _sum: User_prefSumAggregateOutputType | null
    _min: User_prefMinAggregateOutputType | null
    _max: User_prefMaxAggregateOutputType | null
  }

  type GetUser_prefGroupByPayload<T extends user_prefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_prefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_prefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_prefGroupByOutputType[P]>
            : GetScalarType<T[P], User_prefGroupByOutputType[P]>
        }
      >
    >


  export type user_prefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    notifications_on?: boolean
    radius_meters?: boolean
    category_filter?: boolean
    dark_mode?: boolean
    updated_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_pref"]>

  export type user_prefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    notifications_on?: boolean
    radius_meters?: boolean
    category_filter?: boolean
    dark_mode?: boolean
    updated_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_pref"]>

  export type user_prefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    notifications_on?: boolean
    radius_meters?: boolean
    category_filter?: boolean
    dark_mode?: boolean
    updated_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_pref"]>

  export type user_prefSelectScalar = {
    user_id?: boolean
    notifications_on?: boolean
    radius_meters?: boolean
    category_filter?: boolean
    dark_mode?: boolean
    updated_at?: boolean
  }

  export type user_prefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "notifications_on" | "radius_meters" | "category_filter" | "dark_mode" | "updated_at", ExtArgs["result"]["user_pref"]>
  export type user_prefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }
  export type user_prefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }
  export type user_prefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }

  export type $user_prefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_pref"
    objects: {
      user: Prisma.$app_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      notifications_on: boolean
      radius_meters: number
      category_filter: string[]
      dark_mode: boolean
      updated_at: Date
    }, ExtArgs["result"]["user_pref"]>
    composites: {}
  }

  type user_prefGetPayload<S extends boolean | null | undefined | user_prefDefaultArgs> = $Result.GetResult<Prisma.$user_prefPayload, S>

  type user_prefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_prefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_prefCountAggregateInputType | true
    }

  export interface user_prefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_pref'], meta: { name: 'user_pref' } }
    /**
     * Find zero or one User_pref that matches the filter.
     * @param {user_prefFindUniqueArgs} args - Arguments to find a User_pref
     * @example
     * // Get one User_pref
     * const user_pref = await prisma.user_pref.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_prefFindUniqueArgs>(args: SelectSubset<T, user_prefFindUniqueArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_pref that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_prefFindUniqueOrThrowArgs} args - Arguments to find a User_pref
     * @example
     * // Get one User_pref
     * const user_pref = await prisma.user_pref.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_prefFindUniqueOrThrowArgs>(args: SelectSubset<T, user_prefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_pref that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefFindFirstArgs} args - Arguments to find a User_pref
     * @example
     * // Get one User_pref
     * const user_pref = await prisma.user_pref.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_prefFindFirstArgs>(args?: SelectSubset<T, user_prefFindFirstArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_pref that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefFindFirstOrThrowArgs} args - Arguments to find a User_pref
     * @example
     * // Get one User_pref
     * const user_pref = await prisma.user_pref.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_prefFindFirstOrThrowArgs>(args?: SelectSubset<T, user_prefFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_prefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_prefs
     * const user_prefs = await prisma.user_pref.findMany()
     * 
     * // Get first 10 User_prefs
     * const user_prefs = await prisma.user_pref.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_prefWithUser_idOnly = await prisma.user_pref.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_prefFindManyArgs>(args?: SelectSubset<T, user_prefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_pref.
     * @param {user_prefCreateArgs} args - Arguments to create a User_pref.
     * @example
     * // Create one User_pref
     * const User_pref = await prisma.user_pref.create({
     *   data: {
     *     // ... data to create a User_pref
     *   }
     * })
     * 
     */
    create<T extends user_prefCreateArgs>(args: SelectSubset<T, user_prefCreateArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_prefs.
     * @param {user_prefCreateManyArgs} args - Arguments to create many User_prefs.
     * @example
     * // Create many User_prefs
     * const user_pref = await prisma.user_pref.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_prefCreateManyArgs>(args?: SelectSubset<T, user_prefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_prefs and returns the data saved in the database.
     * @param {user_prefCreateManyAndReturnArgs} args - Arguments to create many User_prefs.
     * @example
     * // Create many User_prefs
     * const user_pref = await prisma.user_pref.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_prefs and only return the `user_id`
     * const user_prefWithUser_idOnly = await prisma.user_pref.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_prefCreateManyAndReturnArgs>(args?: SelectSubset<T, user_prefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_pref.
     * @param {user_prefDeleteArgs} args - Arguments to delete one User_pref.
     * @example
     * // Delete one User_pref
     * const User_pref = await prisma.user_pref.delete({
     *   where: {
     *     // ... filter to delete one User_pref
     *   }
     * })
     * 
     */
    delete<T extends user_prefDeleteArgs>(args: SelectSubset<T, user_prefDeleteArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_pref.
     * @param {user_prefUpdateArgs} args - Arguments to update one User_pref.
     * @example
     * // Update one User_pref
     * const user_pref = await prisma.user_pref.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_prefUpdateArgs>(args: SelectSubset<T, user_prefUpdateArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_prefs.
     * @param {user_prefDeleteManyArgs} args - Arguments to filter User_prefs to delete.
     * @example
     * // Delete a few User_prefs
     * const { count } = await prisma.user_pref.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_prefDeleteManyArgs>(args?: SelectSubset<T, user_prefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_prefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_prefs
     * const user_pref = await prisma.user_pref.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_prefUpdateManyArgs>(args: SelectSubset<T, user_prefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_prefs and returns the data updated in the database.
     * @param {user_prefUpdateManyAndReturnArgs} args - Arguments to update many User_prefs.
     * @example
     * // Update many User_prefs
     * const user_pref = await prisma.user_pref.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_prefs and only return the `user_id`
     * const user_prefWithUser_idOnly = await prisma.user_pref.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends user_prefUpdateManyAndReturnArgs>(args: SelectSubset<T, user_prefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_pref.
     * @param {user_prefUpsertArgs} args - Arguments to update or create a User_pref.
     * @example
     * // Update or create a User_pref
     * const user_pref = await prisma.user_pref.upsert({
     *   create: {
     *     // ... data to create a User_pref
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_pref we want to update
     *   }
     * })
     */
    upsert<T extends user_prefUpsertArgs>(args: SelectSubset<T, user_prefUpsertArgs<ExtArgs>>): Prisma__user_prefClient<$Result.GetResult<Prisma.$user_prefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_prefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefCountArgs} args - Arguments to filter User_prefs to count.
     * @example
     * // Count the number of User_prefs
     * const count = await prisma.user_pref.count({
     *   where: {
     *     // ... the filter for the User_prefs we want to count
     *   }
     * })
    **/
    count<T extends user_prefCountArgs>(
      args?: Subset<T, user_prefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_prefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_pref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_prefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_prefAggregateArgs>(args: Subset<T, User_prefAggregateArgs>): Prisma.PrismaPromise<GetUser_prefAggregateType<T>>

    /**
     * Group by User_pref.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_prefGroupByArgs} args - Group by arguments.
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
      T extends user_prefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_prefGroupByArgs['orderBy'] }
        : { orderBy?: user_prefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_prefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_prefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_pref model
   */
  readonly fields: user_prefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_pref.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_prefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends app_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, app_userDefaultArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_pref model
   */
  interface user_prefFieldRefs {
    readonly user_id: FieldRef<"user_pref", 'String'>
    readonly notifications_on: FieldRef<"user_pref", 'Boolean'>
    readonly radius_meters: FieldRef<"user_pref", 'Int'>
    readonly category_filter: FieldRef<"user_pref", 'String[]'>
    readonly dark_mode: FieldRef<"user_pref", 'Boolean'>
    readonly updated_at: FieldRef<"user_pref", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_pref findUnique
   */
  export type user_prefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter, which user_pref to fetch.
     */
    where: user_prefWhereUniqueInput
  }

  /**
   * user_pref findUniqueOrThrow
   */
  export type user_prefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter, which user_pref to fetch.
     */
    where: user_prefWhereUniqueInput
  }

  /**
   * user_pref findFirst
   */
  export type user_prefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter, which user_pref to fetch.
     */
    where?: user_prefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_prefs to fetch.
     */
    orderBy?: user_prefOrderByWithRelationInput | user_prefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_prefs.
     */
    cursor?: user_prefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_prefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_prefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_prefs.
     */
    distinct?: User_prefScalarFieldEnum | User_prefScalarFieldEnum[]
  }

  /**
   * user_pref findFirstOrThrow
   */
  export type user_prefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter, which user_pref to fetch.
     */
    where?: user_prefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_prefs to fetch.
     */
    orderBy?: user_prefOrderByWithRelationInput | user_prefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_prefs.
     */
    cursor?: user_prefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_prefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_prefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_prefs.
     */
    distinct?: User_prefScalarFieldEnum | User_prefScalarFieldEnum[]
  }

  /**
   * user_pref findMany
   */
  export type user_prefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter, which user_prefs to fetch.
     */
    where?: user_prefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_prefs to fetch.
     */
    orderBy?: user_prefOrderByWithRelationInput | user_prefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_prefs.
     */
    cursor?: user_prefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_prefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_prefs.
     */
    skip?: number
    distinct?: User_prefScalarFieldEnum | User_prefScalarFieldEnum[]
  }

  /**
   * user_pref create
   */
  export type user_prefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * The data needed to create a user_pref.
     */
    data: XOR<user_prefCreateInput, user_prefUncheckedCreateInput>
  }

  /**
   * user_pref createMany
   */
  export type user_prefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_prefs.
     */
    data: user_prefCreateManyInput | user_prefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_pref createManyAndReturn
   */
  export type user_prefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * The data used to create many user_prefs.
     */
    data: user_prefCreateManyInput | user_prefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_pref update
   */
  export type user_prefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * The data needed to update a user_pref.
     */
    data: XOR<user_prefUpdateInput, user_prefUncheckedUpdateInput>
    /**
     * Choose, which user_pref to update.
     */
    where: user_prefWhereUniqueInput
  }

  /**
   * user_pref updateMany
   */
  export type user_prefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_prefs.
     */
    data: XOR<user_prefUpdateManyMutationInput, user_prefUncheckedUpdateManyInput>
    /**
     * Filter which user_prefs to update
     */
    where?: user_prefWhereInput
    /**
     * Limit how many user_prefs to update.
     */
    limit?: number
  }

  /**
   * user_pref updateManyAndReturn
   */
  export type user_prefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * The data used to update user_prefs.
     */
    data: XOR<user_prefUpdateManyMutationInput, user_prefUncheckedUpdateManyInput>
    /**
     * Filter which user_prefs to update
     */
    where?: user_prefWhereInput
    /**
     * Limit how many user_prefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_pref upsert
   */
  export type user_prefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * The filter to search for the user_pref to update in case it exists.
     */
    where: user_prefWhereUniqueInput
    /**
     * In case the user_pref found by the `where` argument doesn't exist, create a new user_pref with this data.
     */
    create: XOR<user_prefCreateInput, user_prefUncheckedCreateInput>
    /**
     * In case the user_pref was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_prefUpdateInput, user_prefUncheckedUpdateInput>
  }

  /**
   * user_pref delete
   */
  export type user_prefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
    /**
     * Filter which user_pref to delete.
     */
    where: user_prefWhereUniqueInput
  }

  /**
   * user_pref deleteMany
   */
  export type user_prefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_prefs to delete
     */
    where?: user_prefWhereInput
    /**
     * Limit how many user_prefs to delete.
     */
    limit?: number
  }

  /**
   * user_pref without action
   */
  export type user_prefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_pref
     */
    select?: user_prefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_pref
     */
    omit?: user_prefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_prefInclude<ExtArgs> | null
  }


  /**
   * Model listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    category_id: number | null
    lat: number | null
    lng: number | null
  }

  export type ListingSumAggregateOutputType = {
    category_id: number | null
    lat: number | null
    lng: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    finder_user_id: string | null
    title: string | null
    description: string | null
    category_id: number | null
    status: string | null
    found_at: Date | null
    expires_at: Date | null
    lat: number | null
    lng: number | null
    place_name: string | null
    manual_address: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    finder_user_id: string | null
    title: string | null
    description: string | null
    category_id: number | null
    status: string | null
    found_at: Date | null
    expires_at: Date | null
    lat: number | null
    lng: number | null
    place_name: string | null
    manual_address: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    finder_user_id: number
    title: number
    description: number
    category_id: number
    status: number
    found_at: number
    expires_at: number
    lat: number
    lng: number
    place_name: number
    manual_address: number
    created_at: number
    updated_at: number
    image_url: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    category_id?: true
    lat?: true
    lng?: true
  }

  export type ListingSumAggregateInputType = {
    category_id?: true
    lat?: true
    lng?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    finder_user_id?: true
    title?: true
    description?: true
    category_id?: true
    status?: true
    found_at?: true
    expires_at?: true
    lat?: true
    lng?: true
    place_name?: true
    manual_address?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    finder_user_id?: true
    title?: true
    description?: true
    category_id?: true
    status?: true
    found_at?: true
    expires_at?: true
    lat?: true
    lng?: true
    place_name?: true
    manual_address?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    finder_user_id?: true
    title?: true
    description?: true
    category_id?: true
    status?: true
    found_at?: true
    expires_at?: true
    lat?: true
    lng?: true
    place_name?: true
    manual_address?: true
    created_at?: true
    updated_at?: true
    image_url?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listing to aggregate.
     */
    where?: listingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type listingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listingWhereInput
    orderBy?: listingOrderByWithAggregationInput | listingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: listingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    finder_user_id: string
    title: string
    description: string | null
    category_id: number | null
    status: string
    found_at: Date
    expires_at: Date
    lat: number
    lng: number
    place_name: string | null
    manual_address: string | null
    created_at: Date
    updated_at: Date
    image_url: string | null
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends listingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type listingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finder_user_id?: boolean
    title?: boolean
    description?: boolean
    category_id?: boolean
    status?: boolean
    found_at?: boolean
    expires_at?: boolean
    lat?: boolean
    lng?: boolean
    place_name?: boolean
    manual_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
    claims?: boolean | listing$claimsArgs<ExtArgs>
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
    photos?: boolean | listing$photosArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type listingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finder_user_id?: boolean
    title?: boolean
    description?: boolean
    category_id?: boolean
    status?: boolean
    found_at?: boolean
    expires_at?: boolean
    lat?: boolean
    lng?: boolean
    place_name?: boolean
    manual_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type listingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finder_user_id?: boolean
    title?: boolean
    description?: boolean
    category_id?: boolean
    status?: boolean
    found_at?: boolean
    expires_at?: boolean
    lat?: boolean
    lng?: boolean
    place_name?: boolean
    manual_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type listingSelectScalar = {
    id?: boolean
    finder_user_id?: boolean
    title?: boolean
    description?: boolean
    category_id?: boolean
    status?: boolean
    found_at?: boolean
    expires_at?: boolean
    lat?: boolean
    lng?: boolean
    place_name?: boolean
    manual_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
  }

  export type listingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "finder_user_id" | "title" | "description" | "category_id" | "status" | "found_at" | "expires_at" | "lat" | "lng" | "place_name" | "manual_address" | "created_at" | "updated_at" | "image_url", ExtArgs["result"]["listing"]>
  export type listingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | listing$claimsArgs<ExtArgs>
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
    photos?: boolean | listing$photosArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type listingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
  }
  export type listingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | listing$categoryArgs<ExtArgs>
    finder?: boolean | app_userDefaultArgs<ExtArgs>
  }

  export type $listingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listing"
    objects: {
      claims: Prisma.$claimPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs> | null
      finder: Prisma.$app_userPayload<ExtArgs>
      photos: Prisma.$listing_photoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      finder_user_id: string
      title: string
      description: string | null
      category_id: number | null
      status: string
      found_at: Date
      expires_at: Date
      lat: number
      lng: number
      place_name: string | null
      manual_address: string | null
      created_at: Date
      updated_at: Date
      image_url: string | null
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type listingGetPayload<S extends boolean | null | undefined | listingDefaultArgs> = $Result.GetResult<Prisma.$listingPayload, S>

  type listingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<listingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface listingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listing'], meta: { name: 'listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {listingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listingFindUniqueArgs>(args: SelectSubset<T, listingFindUniqueArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listingFindUniqueOrThrowArgs>(args: SelectSubset<T, listingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listingFindFirstArgs>(args?: SelectSubset<T, listingFindFirstArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listingFindFirstOrThrowArgs>(args?: SelectSubset<T, listingFindFirstOrThrowArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listingFindManyArgs>(args?: SelectSubset<T, listingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {listingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends listingCreateArgs>(args: SelectSubset<T, listingCreateArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {listingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listingCreateManyArgs>(args?: SelectSubset<T, listingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {listingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listingCreateManyAndReturnArgs>(args?: SelectSubset<T, listingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {listingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends listingDeleteArgs>(args: SelectSubset<T, listingDeleteArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {listingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listingUpdateArgs>(args: SelectSubset<T, listingUpdateArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {listingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listingDeleteManyArgs>(args?: SelectSubset<T, listingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listingUpdateManyArgs>(args: SelectSubset<T, listingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {listingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
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
    updateManyAndReturn<T extends listingUpdateManyAndReturnArgs>(args: SelectSubset<T, listingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {listingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends listingUpsertArgs>(args: SelectSubset<T, listingUpsertArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends listingCountArgs>(
      args?: Subset<T, listingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingGroupByArgs} args - Group by arguments.
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
      T extends listingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listingGroupByArgs['orderBy'] }
        : { orderBy?: listingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, listingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listing model
   */
  readonly fields: listingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends listing$claimsArgs<ExtArgs> = {}>(args?: Subset<T, listing$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends listing$categoryArgs<ExtArgs> = {}>(args?: Subset<T, listing$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    finder<T extends app_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, app_userDefaultArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends listing$photosArgs<ExtArgs> = {}>(args?: Subset<T, listing$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the listing model
   */
  interface listingFieldRefs {
    readonly id: FieldRef<"listing", 'String'>
    readonly finder_user_id: FieldRef<"listing", 'String'>
    readonly title: FieldRef<"listing", 'String'>
    readonly description: FieldRef<"listing", 'String'>
    readonly category_id: FieldRef<"listing", 'Int'>
    readonly status: FieldRef<"listing", 'String'>
    readonly found_at: FieldRef<"listing", 'DateTime'>
    readonly expires_at: FieldRef<"listing", 'DateTime'>
    readonly lat: FieldRef<"listing", 'Float'>
    readonly lng: FieldRef<"listing", 'Float'>
    readonly place_name: FieldRef<"listing", 'String'>
    readonly manual_address: FieldRef<"listing", 'String'>
    readonly created_at: FieldRef<"listing", 'DateTime'>
    readonly updated_at: FieldRef<"listing", 'DateTime'>
    readonly image_url: FieldRef<"listing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * listing findUnique
   */
  export type listingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter, which listing to fetch.
     */
    where: listingWhereUniqueInput
  }

  /**
   * listing findUniqueOrThrow
   */
  export type listingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter, which listing to fetch.
     */
    where: listingWhereUniqueInput
  }

  /**
   * listing findFirst
   */
  export type listingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter, which listing to fetch.
     */
    where?: listingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listings.
     */
    cursor?: listingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * listing findFirstOrThrow
   */
  export type listingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter, which listing to fetch.
     */
    where?: listingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listings.
     */
    cursor?: listingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * listing findMany
   */
  export type listingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter, which listings to fetch.
     */
    where?: listingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listings to fetch.
     */
    orderBy?: listingOrderByWithRelationInput | listingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listings.
     */
    cursor?: listingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * listing create
   */
  export type listingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * The data needed to create a listing.
     */
    data: XOR<listingCreateInput, listingUncheckedCreateInput>
  }

  /**
   * listing createMany
   */
  export type listingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listings.
     */
    data: listingCreateManyInput | listingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listing createManyAndReturn
   */
  export type listingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * The data used to create many listings.
     */
    data: listingCreateManyInput | listingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * listing update
   */
  export type listingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * The data needed to update a listing.
     */
    data: XOR<listingUpdateInput, listingUncheckedUpdateInput>
    /**
     * Choose, which listing to update.
     */
    where: listingWhereUniqueInput
  }

  /**
   * listing updateMany
   */
  export type listingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listings.
     */
    data: XOR<listingUpdateManyMutationInput, listingUncheckedUpdateManyInput>
    /**
     * Filter which listings to update
     */
    where?: listingWhereInput
    /**
     * Limit how many listings to update.
     */
    limit?: number
  }

  /**
   * listing updateManyAndReturn
   */
  export type listingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * The data used to update listings.
     */
    data: XOR<listingUpdateManyMutationInput, listingUncheckedUpdateManyInput>
    /**
     * Filter which listings to update
     */
    where?: listingWhereInput
    /**
     * Limit how many listings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * listing upsert
   */
  export type listingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * The filter to search for the listing to update in case it exists.
     */
    where: listingWhereUniqueInput
    /**
     * In case the listing found by the `where` argument doesn't exist, create a new listing with this data.
     */
    create: XOR<listingCreateInput, listingUncheckedCreateInput>
    /**
     * In case the listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listingUpdateInput, listingUncheckedUpdateInput>
  }

  /**
   * listing delete
   */
  export type listingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
    /**
     * Filter which listing to delete.
     */
    where: listingWhereUniqueInput
  }

  /**
   * listing deleteMany
   */
  export type listingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listings to delete
     */
    where?: listingWhereInput
    /**
     * Limit how many listings to delete.
     */
    limit?: number
  }

  /**
   * listing.claims
   */
  export type listing$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    where?: claimWhereInput
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    cursor?: claimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * listing.category
   */
  export type listing$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * listing.photos
   */
  export type listing$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    where?: listing_photoWhereInput
    orderBy?: listing_photoOrderByWithRelationInput | listing_photoOrderByWithRelationInput[]
    cursor?: listing_photoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Listing_photoScalarFieldEnum | Listing_photoScalarFieldEnum[]
  }

  /**
   * listing without action
   */
  export type listingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing
     */
    select?: listingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing
     */
    omit?: listingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listingInclude<ExtArgs> | null
  }


  /**
   * Model listing_photo
   */

  export type AggregateListing_photo = {
    _count: Listing_photoCountAggregateOutputType | null
    _avg: Listing_photoAvgAggregateOutputType | null
    _sum: Listing_photoSumAggregateOutputType | null
    _min: Listing_photoMinAggregateOutputType | null
    _max: Listing_photoMaxAggregateOutputType | null
  }

  export type Listing_photoAvgAggregateOutputType = {
    sort_order: number | null
  }

  export type Listing_photoSumAggregateOutputType = {
    sort_order: number | null
  }

  export type Listing_photoMinAggregateOutputType = {
    id: string | null
    listing_id: string | null
    url: string | null
    storage_key: string | null
    sort_order: number | null
    uploaded_at: Date | null
  }

  export type Listing_photoMaxAggregateOutputType = {
    id: string | null
    listing_id: string | null
    url: string | null
    storage_key: string | null
    sort_order: number | null
    uploaded_at: Date | null
  }

  export type Listing_photoCountAggregateOutputType = {
    id: number
    listing_id: number
    url: number
    storage_key: number
    sort_order: number
    uploaded_at: number
    _all: number
  }


  export type Listing_photoAvgAggregateInputType = {
    sort_order?: true
  }

  export type Listing_photoSumAggregateInputType = {
    sort_order?: true
  }

  export type Listing_photoMinAggregateInputType = {
    id?: true
    listing_id?: true
    url?: true
    storage_key?: true
    sort_order?: true
    uploaded_at?: true
  }

  export type Listing_photoMaxAggregateInputType = {
    id?: true
    listing_id?: true
    url?: true
    storage_key?: true
    sort_order?: true
    uploaded_at?: true
  }

  export type Listing_photoCountAggregateInputType = {
    id?: true
    listing_id?: true
    url?: true
    storage_key?: true
    sort_order?: true
    uploaded_at?: true
    _all?: true
  }

  export type Listing_photoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listing_photo to aggregate.
     */
    where?: listing_photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_photos to fetch.
     */
    orderBy?: listing_photoOrderByWithRelationInput | listing_photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listing_photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listing_photos
    **/
    _count?: true | Listing_photoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Listing_photoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Listing_photoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Listing_photoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Listing_photoMaxAggregateInputType
  }

  export type GetListing_photoAggregateType<T extends Listing_photoAggregateArgs> = {
        [P in keyof T & keyof AggregateListing_photo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing_photo[P]>
      : GetScalarType<T[P], AggregateListing_photo[P]>
  }




  export type listing_photoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listing_photoWhereInput
    orderBy?: listing_photoOrderByWithAggregationInput | listing_photoOrderByWithAggregationInput[]
    by: Listing_photoScalarFieldEnum[] | Listing_photoScalarFieldEnum
    having?: listing_photoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Listing_photoCountAggregateInputType | true
    _avg?: Listing_photoAvgAggregateInputType
    _sum?: Listing_photoSumAggregateInputType
    _min?: Listing_photoMinAggregateInputType
    _max?: Listing_photoMaxAggregateInputType
  }

  export type Listing_photoGroupByOutputType = {
    id: string
    listing_id: string
    url: string
    storage_key: string | null
    sort_order: number
    uploaded_at: Date
    _count: Listing_photoCountAggregateOutputType | null
    _avg: Listing_photoAvgAggregateOutputType | null
    _sum: Listing_photoSumAggregateOutputType | null
    _min: Listing_photoMinAggregateOutputType | null
    _max: Listing_photoMaxAggregateOutputType | null
  }

  type GetListing_photoGroupByPayload<T extends listing_photoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Listing_photoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Listing_photoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Listing_photoGroupByOutputType[P]>
            : GetScalarType<T[P], Listing_photoGroupByOutputType[P]>
        }
      >
    >


  export type listing_photoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    url?: boolean
    storage_key?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing_photo"]>

  export type listing_photoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    url?: boolean
    storage_key?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing_photo"]>

  export type listing_photoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    url?: boolean
    storage_key?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing_photo"]>

  export type listing_photoSelectScalar = {
    id?: boolean
    listing_id?: boolean
    url?: boolean
    storage_key?: boolean
    sort_order?: boolean
    uploaded_at?: boolean
  }

  export type listing_photoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listing_id" | "url" | "storage_key" | "sort_order" | "uploaded_at", ExtArgs["result"]["listing_photo"]>
  export type listing_photoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }
  export type listing_photoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }
  export type listing_photoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }

  export type $listing_photoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listing_photo"
    objects: {
      listing: Prisma.$listingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listing_id: string
      url: string
      storage_key: string | null
      sort_order: number
      uploaded_at: Date
    }, ExtArgs["result"]["listing_photo"]>
    composites: {}
  }

  type listing_photoGetPayload<S extends boolean | null | undefined | listing_photoDefaultArgs> = $Result.GetResult<Prisma.$listing_photoPayload, S>

  type listing_photoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<listing_photoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Listing_photoCountAggregateInputType | true
    }

  export interface listing_photoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listing_photo'], meta: { name: 'listing_photo' } }
    /**
     * Find zero or one Listing_photo that matches the filter.
     * @param {listing_photoFindUniqueArgs} args - Arguments to find a Listing_photo
     * @example
     * // Get one Listing_photo
     * const listing_photo = await prisma.listing_photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listing_photoFindUniqueArgs>(args: SelectSubset<T, listing_photoFindUniqueArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing_photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listing_photoFindUniqueOrThrowArgs} args - Arguments to find a Listing_photo
     * @example
     * // Get one Listing_photo
     * const listing_photo = await prisma.listing_photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listing_photoFindUniqueOrThrowArgs>(args: SelectSubset<T, listing_photoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing_photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoFindFirstArgs} args - Arguments to find a Listing_photo
     * @example
     * // Get one Listing_photo
     * const listing_photo = await prisma.listing_photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listing_photoFindFirstArgs>(args?: SelectSubset<T, listing_photoFindFirstArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing_photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoFindFirstOrThrowArgs} args - Arguments to find a Listing_photo
     * @example
     * // Get one Listing_photo
     * const listing_photo = await prisma.listing_photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listing_photoFindFirstOrThrowArgs>(args?: SelectSubset<T, listing_photoFindFirstOrThrowArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listing_photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listing_photos
     * const listing_photos = await prisma.listing_photo.findMany()
     * 
     * // Get first 10 Listing_photos
     * const listing_photos = await prisma.listing_photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listing_photoWithIdOnly = await prisma.listing_photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listing_photoFindManyArgs>(args?: SelectSubset<T, listing_photoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing_photo.
     * @param {listing_photoCreateArgs} args - Arguments to create a Listing_photo.
     * @example
     * // Create one Listing_photo
     * const Listing_photo = await prisma.listing_photo.create({
     *   data: {
     *     // ... data to create a Listing_photo
     *   }
     * })
     * 
     */
    create<T extends listing_photoCreateArgs>(args: SelectSubset<T, listing_photoCreateArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listing_photos.
     * @param {listing_photoCreateManyArgs} args - Arguments to create many Listing_photos.
     * @example
     * // Create many Listing_photos
     * const listing_photo = await prisma.listing_photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listing_photoCreateManyArgs>(args?: SelectSubset<T, listing_photoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listing_photos and returns the data saved in the database.
     * @param {listing_photoCreateManyAndReturnArgs} args - Arguments to create many Listing_photos.
     * @example
     * // Create many Listing_photos
     * const listing_photo = await prisma.listing_photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listing_photos and only return the `id`
     * const listing_photoWithIdOnly = await prisma.listing_photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listing_photoCreateManyAndReturnArgs>(args?: SelectSubset<T, listing_photoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing_photo.
     * @param {listing_photoDeleteArgs} args - Arguments to delete one Listing_photo.
     * @example
     * // Delete one Listing_photo
     * const Listing_photo = await prisma.listing_photo.delete({
     *   where: {
     *     // ... filter to delete one Listing_photo
     *   }
     * })
     * 
     */
    delete<T extends listing_photoDeleteArgs>(args: SelectSubset<T, listing_photoDeleteArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing_photo.
     * @param {listing_photoUpdateArgs} args - Arguments to update one Listing_photo.
     * @example
     * // Update one Listing_photo
     * const listing_photo = await prisma.listing_photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listing_photoUpdateArgs>(args: SelectSubset<T, listing_photoUpdateArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listing_photos.
     * @param {listing_photoDeleteManyArgs} args - Arguments to filter Listing_photos to delete.
     * @example
     * // Delete a few Listing_photos
     * const { count } = await prisma.listing_photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listing_photoDeleteManyArgs>(args?: SelectSubset<T, listing_photoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listing_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listing_photos
     * const listing_photo = await prisma.listing_photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listing_photoUpdateManyArgs>(args: SelectSubset<T, listing_photoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listing_photos and returns the data updated in the database.
     * @param {listing_photoUpdateManyAndReturnArgs} args - Arguments to update many Listing_photos.
     * @example
     * // Update many Listing_photos
     * const listing_photo = await prisma.listing_photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listing_photos and only return the `id`
     * const listing_photoWithIdOnly = await prisma.listing_photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends listing_photoUpdateManyAndReturnArgs>(args: SelectSubset<T, listing_photoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing_photo.
     * @param {listing_photoUpsertArgs} args - Arguments to update or create a Listing_photo.
     * @example
     * // Update or create a Listing_photo
     * const listing_photo = await prisma.listing_photo.upsert({
     *   create: {
     *     // ... data to create a Listing_photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing_photo we want to update
     *   }
     * })
     */
    upsert<T extends listing_photoUpsertArgs>(args: SelectSubset<T, listing_photoUpsertArgs<ExtArgs>>): Prisma__listing_photoClient<$Result.GetResult<Prisma.$listing_photoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listing_photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoCountArgs} args - Arguments to filter Listing_photos to count.
     * @example
     * // Count the number of Listing_photos
     * const count = await prisma.listing_photo.count({
     *   where: {
     *     // ... the filter for the Listing_photos we want to count
     *   }
     * })
    **/
    count<T extends listing_photoCountArgs>(
      args?: Subset<T, listing_photoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Listing_photoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing_photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Listing_photoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Listing_photoAggregateArgs>(args: Subset<T, Listing_photoAggregateArgs>): Prisma.PrismaPromise<GetListing_photoAggregateType<T>>

    /**
     * Group by Listing_photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_photoGroupByArgs} args - Group by arguments.
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
      T extends listing_photoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listing_photoGroupByArgs['orderBy'] }
        : { orderBy?: listing_photoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, listing_photoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListing_photoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listing_photo model
   */
  readonly fields: listing_photoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listing_photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listing_photoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listing<T extends listingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listingDefaultArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the listing_photo model
   */
  interface listing_photoFieldRefs {
    readonly id: FieldRef<"listing_photo", 'String'>
    readonly listing_id: FieldRef<"listing_photo", 'String'>
    readonly url: FieldRef<"listing_photo", 'String'>
    readonly storage_key: FieldRef<"listing_photo", 'String'>
    readonly sort_order: FieldRef<"listing_photo", 'Int'>
    readonly uploaded_at: FieldRef<"listing_photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * listing_photo findUnique
   */
  export type listing_photoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter, which listing_photo to fetch.
     */
    where: listing_photoWhereUniqueInput
  }

  /**
   * listing_photo findUniqueOrThrow
   */
  export type listing_photoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter, which listing_photo to fetch.
     */
    where: listing_photoWhereUniqueInput
  }

  /**
   * listing_photo findFirst
   */
  export type listing_photoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter, which listing_photo to fetch.
     */
    where?: listing_photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_photos to fetch.
     */
    orderBy?: listing_photoOrderByWithRelationInput | listing_photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listing_photos.
     */
    cursor?: listing_photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listing_photos.
     */
    distinct?: Listing_photoScalarFieldEnum | Listing_photoScalarFieldEnum[]
  }

  /**
   * listing_photo findFirstOrThrow
   */
  export type listing_photoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter, which listing_photo to fetch.
     */
    where?: listing_photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_photos to fetch.
     */
    orderBy?: listing_photoOrderByWithRelationInput | listing_photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listing_photos.
     */
    cursor?: listing_photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listing_photos.
     */
    distinct?: Listing_photoScalarFieldEnum | Listing_photoScalarFieldEnum[]
  }

  /**
   * listing_photo findMany
   */
  export type listing_photoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter, which listing_photos to fetch.
     */
    where?: listing_photoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listing_photos to fetch.
     */
    orderBy?: listing_photoOrderByWithRelationInput | listing_photoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listing_photos.
     */
    cursor?: listing_photoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listing_photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listing_photos.
     */
    skip?: number
    distinct?: Listing_photoScalarFieldEnum | Listing_photoScalarFieldEnum[]
  }

  /**
   * listing_photo create
   */
  export type listing_photoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * The data needed to create a listing_photo.
     */
    data: XOR<listing_photoCreateInput, listing_photoUncheckedCreateInput>
  }

  /**
   * listing_photo createMany
   */
  export type listing_photoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listing_photos.
     */
    data: listing_photoCreateManyInput | listing_photoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listing_photo createManyAndReturn
   */
  export type listing_photoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * The data used to create many listing_photos.
     */
    data: listing_photoCreateManyInput | listing_photoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * listing_photo update
   */
  export type listing_photoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * The data needed to update a listing_photo.
     */
    data: XOR<listing_photoUpdateInput, listing_photoUncheckedUpdateInput>
    /**
     * Choose, which listing_photo to update.
     */
    where: listing_photoWhereUniqueInput
  }

  /**
   * listing_photo updateMany
   */
  export type listing_photoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listing_photos.
     */
    data: XOR<listing_photoUpdateManyMutationInput, listing_photoUncheckedUpdateManyInput>
    /**
     * Filter which listing_photos to update
     */
    where?: listing_photoWhereInput
    /**
     * Limit how many listing_photos to update.
     */
    limit?: number
  }

  /**
   * listing_photo updateManyAndReturn
   */
  export type listing_photoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * The data used to update listing_photos.
     */
    data: XOR<listing_photoUpdateManyMutationInput, listing_photoUncheckedUpdateManyInput>
    /**
     * Filter which listing_photos to update
     */
    where?: listing_photoWhereInput
    /**
     * Limit how many listing_photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * listing_photo upsert
   */
  export type listing_photoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * The filter to search for the listing_photo to update in case it exists.
     */
    where: listing_photoWhereUniqueInput
    /**
     * In case the listing_photo found by the `where` argument doesn't exist, create a new listing_photo with this data.
     */
    create: XOR<listing_photoCreateInput, listing_photoUncheckedCreateInput>
    /**
     * In case the listing_photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listing_photoUpdateInput, listing_photoUncheckedUpdateInput>
  }

  /**
   * listing_photo delete
   */
  export type listing_photoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
    /**
     * Filter which listing_photo to delete.
     */
    where: listing_photoWhereUniqueInput
  }

  /**
   * listing_photo deleteMany
   */
  export type listing_photoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listing_photos to delete
     */
    where?: listing_photoWhereInput
    /**
     * Limit how many listing_photos to delete.
     */
    limit?: number
  }

  /**
   * listing_photo without action
   */
  export type listing_photoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_photo
     */
    select?: listing_photoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the listing_photo
     */
    omit?: listing_photoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listing_photoInclude<ExtArgs> | null
  }


  /**
   * Model claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimMinAggregateOutputType = {
    id: string | null
    listing_id: string | null
    claimer_user_id: string | null
    status: string | null
    message: string | null
    created_at: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: string | null
    listing_id: string | null
    claimer_user_id: string | null
    status: string | null
    message: string | null
    created_at: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    listing_id: number
    claimer_user_id: number
    status: number
    message: number
    created_at: number
    _all: number
  }


  export type ClaimMinAggregateInputType = {
    id?: true
    listing_id?: true
    claimer_user_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    listing_id?: true
    claimer_user_id?: true
    status?: true
    message?: true
    created_at?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    listing_id?: true
    claimer_user_id?: true
    status?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claim to aggregate.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type claimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: claimWhereInput
    orderBy?: claimOrderByWithAggregationInput | claimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: claimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: string
    listing_id: string
    claimer_user_id: string
    status: string
    message: string | null
    created_at: Date
    _count: ClaimCountAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends claimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type claimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    claimer_user_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    claimer_user_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listing_id?: boolean
    claimer_user_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type claimSelectScalar = {
    id?: boolean
    listing_id?: boolean
    claimer_user_id?: boolean
    status?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type claimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listing_id" | "claimer_user_id" | "status" | "message" | "created_at", ExtArgs["result"]["claim"]>
  export type claimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }
  export type claimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }
  export type claimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claimer?: boolean | app_userDefaultArgs<ExtArgs>
    listing?: boolean | listingDefaultArgs<ExtArgs>
  }

  export type $claimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "claim"
    objects: {
      claimer: Prisma.$app_userPayload<ExtArgs>
      listing: Prisma.$listingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listing_id: string
      claimer_user_id: string
      status: string
      message: string | null
      created_at: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type claimGetPayload<S extends boolean | null | undefined | claimDefaultArgs> = $Result.GetResult<Prisma.$claimPayload, S>

  type claimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<claimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface claimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['claim'], meta: { name: 'claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {claimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claimFindUniqueArgs>(args: SelectSubset<T, claimFindUniqueArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {claimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claimFindUniqueOrThrowArgs>(args: SelectSubset<T, claimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claimFindFirstArgs>(args?: SelectSubset<T, claimFindFirstArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claimFindFirstOrThrowArgs>(args?: SelectSubset<T, claimFindFirstOrThrowArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends claimFindManyArgs>(args?: SelectSubset<T, claimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {claimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends claimCreateArgs>(args: SelectSubset<T, claimCreateArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {claimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends claimCreateManyArgs>(args?: SelectSubset<T, claimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {claimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends claimCreateManyAndReturnArgs>(args?: SelectSubset<T, claimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {claimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends claimDeleteArgs>(args: SelectSubset<T, claimDeleteArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {claimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends claimUpdateArgs>(args: SelectSubset<T, claimUpdateArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {claimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends claimDeleteManyArgs>(args?: SelectSubset<T, claimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends claimUpdateManyArgs>(args: SelectSubset<T, claimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {claimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
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
    updateManyAndReturn<T extends claimUpdateManyAndReturnArgs>(args: SelectSubset<T, claimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {claimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends claimUpsertArgs>(args: SelectSubset<T, claimUpsertArgs<ExtArgs>>): Prisma__claimClient<$Result.GetResult<Prisma.$claimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends claimCountArgs>(
      args?: Subset<T, claimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claimGroupByArgs} args - Group by arguments.
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
      T extends claimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: claimGroupByArgs['orderBy'] }
        : { orderBy?: claimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, claimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the claim model
   */
  readonly fields: claimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__claimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claimer<T extends app_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, app_userDefaultArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends listingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listingDefaultArgs<ExtArgs>>): Prisma__listingClient<$Result.GetResult<Prisma.$listingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the claim model
   */
  interface claimFieldRefs {
    readonly id: FieldRef<"claim", 'String'>
    readonly listing_id: FieldRef<"claim", 'String'>
    readonly claimer_user_id: FieldRef<"claim", 'String'>
    readonly status: FieldRef<"claim", 'String'>
    readonly message: FieldRef<"claim", 'String'>
    readonly created_at: FieldRef<"claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * claim findUnique
   */
  export type claimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim findUniqueOrThrow
   */
  export type claimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim findFirst
   */
  export type claimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim findFirstOrThrow
   */
  export type claimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claim to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim findMany
   */
  export type claimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter, which claims to fetch.
     */
    where?: claimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of claims to fetch.
     */
    orderBy?: claimOrderByWithRelationInput | claimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing claims.
     */
    cursor?: claimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * claim create
   */
  export type claimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The data needed to create a claim.
     */
    data: XOR<claimCreateInput, claimUncheckedCreateInput>
  }

  /**
   * claim createMany
   */
  export type claimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many claims.
     */
    data: claimCreateManyInput | claimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * claim createManyAndReturn
   */
  export type claimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * The data used to create many claims.
     */
    data: claimCreateManyInput | claimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim update
   */
  export type claimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The data needed to update a claim.
     */
    data: XOR<claimUpdateInput, claimUncheckedUpdateInput>
    /**
     * Choose, which claim to update.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim updateMany
   */
  export type claimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update claims.
     */
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyInput>
    /**
     * Filter which claims to update
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to update.
     */
    limit?: number
  }

  /**
   * claim updateManyAndReturn
   */
  export type claimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * The data used to update claims.
     */
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyInput>
    /**
     * Filter which claims to update
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * claim upsert
   */
  export type claimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * The filter to search for the claim to update in case it exists.
     */
    where: claimWhereUniqueInput
    /**
     * In case the claim found by the `where` argument doesn't exist, create a new claim with this data.
     */
    create: XOR<claimCreateInput, claimUncheckedCreateInput>
    /**
     * In case the claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<claimUpdateInput, claimUncheckedUpdateInput>
  }

  /**
   * claim delete
   */
  export type claimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
    /**
     * Filter which claim to delete.
     */
    where: claimWhereUniqueInput
  }

  /**
   * claim deleteMany
   */
  export type claimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which claims to delete
     */
    where?: claimWhereInput
    /**
     * Limit how many claims to delete.
     */
    limit?: number
  }

  /**
   * claim without action
   */
  export type claimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the claim
     */
    select?: claimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the claim
     */
    omit?: claimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: claimInclude<ExtArgs> | null
  }


  /**
   * Model notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    channel: string | null
    status: string | null
    created_at: Date | null
    sent_at: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    type: string | null
    channel: string | null
    status: string | null
    created_at: Date | null
    sent_at: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    channel: number
    payload: number
    status: number
    created_at: number
    sent_at: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    channel?: true
    status?: true
    created_at?: true
    sent_at?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    channel?: true
    status?: true
    created_at?: true
    sent_at?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    channel?: true
    payload?: true
    status?: true
    created_at?: true
    sent_at?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notification to aggregate.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type notificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationWhereInput
    orderBy?: notificationOrderByWithAggregationInput | notificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: notificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    user_id: string
    type: string
    channel: string
    payload: JsonValue
    status: string
    created_at: Date
    sent_at: Date | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends notificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type notificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    channel?: boolean
    payload?: boolean
    status?: boolean
    created_at?: boolean
    sent_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    channel?: boolean
    payload?: boolean
    status?: boolean
    created_at?: boolean
    sent_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    channel?: boolean
    payload?: boolean
    status?: boolean
    created_at?: boolean
    sent_at?: boolean
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type notificationSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    channel?: boolean
    payload?: boolean
    status?: boolean
    created_at?: boolean
    sent_at?: boolean
  }

  export type notificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "channel" | "payload" | "status" | "created_at" | "sent_at", ExtArgs["result"]["notification"]>
  export type notificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }
  export type notificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | app_userDefaultArgs<ExtArgs>
  }

  export type $notificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notification"
    objects: {
      user: Prisma.$app_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      type: string
      channel: string
      payload: Prisma.JsonValue
      status: string
      created_at: Date
      sent_at: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type notificationGetPayload<S extends boolean | null | undefined | notificationDefaultArgs> = $Result.GetResult<Prisma.$notificationPayload, S>

  type notificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface notificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notification'], meta: { name: 'notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {notificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationFindUniqueArgs>(args: SelectSubset<T, notificationFindUniqueArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationFindFirstArgs>(args?: SelectSubset<T, notificationFindFirstArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationFindManyArgs>(args?: SelectSubset<T, notificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {notificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends notificationCreateArgs>(args: SelectSubset<T, notificationCreateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationCreateManyArgs>(args?: SelectSubset<T, notificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {notificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends notificationDeleteArgs>(args: SelectSubset<T, notificationDeleteArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {notificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationUpdateArgs>(args: SelectSubset<T, notificationUpdateArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationDeleteManyArgs>(args?: SelectSubset<T, notificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationUpdateManyArgs>(args: SelectSubset<T, notificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {notificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends notificationUpsertArgs>(args: SelectSubset<T, notificationUpsertArgs<ExtArgs>>): Prisma__notificationClient<$Result.GetResult<Prisma.$notificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationCountArgs>(
      args?: Subset<T, notificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationGroupByArgs} args - Group by arguments.
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
      T extends notificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationGroupByArgs['orderBy'] }
        : { orderBy?: notificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notification model
   */
  readonly fields: notificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends app_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, app_userDefaultArgs<ExtArgs>>): Prisma__app_userClient<$Result.GetResult<Prisma.$app_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notification model
   */
  interface notificationFieldRefs {
    readonly id: FieldRef<"notification", 'String'>
    readonly user_id: FieldRef<"notification", 'String'>
    readonly type: FieldRef<"notification", 'String'>
    readonly channel: FieldRef<"notification", 'String'>
    readonly payload: FieldRef<"notification", 'Json'>
    readonly status: FieldRef<"notification", 'String'>
    readonly created_at: FieldRef<"notification", 'DateTime'>
    readonly sent_at: FieldRef<"notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notification findUnique
   */
  export type notificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findUniqueOrThrow
   */
  export type notificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification findFirst
   */
  export type notificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findFirstOrThrow
   */
  export type notificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notification to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification findMany
   */
  export type notificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationOrderByWithRelationInput | notificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * notification create
   */
  export type notificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to create a notification.
     */
    data: XOR<notificationCreateInput, notificationUncheckedCreateInput>
  }

  /**
   * notification createMany
   */
  export type notificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notification createManyAndReturn
   */
  export type notificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationCreateManyInput | notificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification update
   */
  export type notificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The data needed to update a notification.
     */
    data: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
    /**
     * Choose, which notification to update.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification updateMany
   */
  export type notificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notification updateManyAndReturn
   */
  export type notificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notification upsert
   */
  export type notificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * The filter to search for the notification to update in case it exists.
     */
    where: notificationWhereUniqueInput
    /**
     * In case the notification found by the `where` argument doesn't exist, create a new notification with this data.
     */
    create: XOR<notificationCreateInput, notificationUncheckedCreateInput>
    /**
     * In case the notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationUpdateInput, notificationUncheckedUpdateInput>
  }

  /**
   * notification delete
   */
  export type notificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
    /**
     * Filter which notification to delete.
     */
    where: notificationWhereUniqueInput
  }

  /**
   * notification deleteMany
   */
  export type notificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notification without action
   */
  export type notificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notification
     */
    select?: notificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notification
     */
    omit?: notificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationInclude<ExtArgs> | null
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


  export const App_userScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    points: 'points',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type App_userScalarFieldEnum = (typeof App_userScalarFieldEnum)[keyof typeof App_userScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const User_prefScalarFieldEnum: {
    user_id: 'user_id',
    notifications_on: 'notifications_on',
    radius_meters: 'radius_meters',
    category_filter: 'category_filter',
    dark_mode: 'dark_mode',
    updated_at: 'updated_at'
  };

  export type User_prefScalarFieldEnum = (typeof User_prefScalarFieldEnum)[keyof typeof User_prefScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    finder_user_id: 'finder_user_id',
    title: 'title',
    description: 'description',
    category_id: 'category_id',
    status: 'status',
    found_at: 'found_at',
    expires_at: 'expires_at',
    lat: 'lat',
    lng: 'lng',
    place_name: 'place_name',
    manual_address: 'manual_address',
    created_at: 'created_at',
    updated_at: 'updated_at',
    image_url: 'image_url'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const Listing_photoScalarFieldEnum: {
    id: 'id',
    listing_id: 'listing_id',
    url: 'url',
    storage_key: 'storage_key',
    sort_order: 'sort_order',
    uploaded_at: 'uploaded_at'
  };

  export type Listing_photoScalarFieldEnum = (typeof Listing_photoScalarFieldEnum)[keyof typeof Listing_photoScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    listing_id: 'listing_id',
    claimer_user_id: 'claimer_user_id',
    status: 'status',
    message: 'message',
    created_at: 'created_at'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    channel: 'channel',
    payload: 'payload',
    status: 'status',
    created_at: 'created_at',
    sent_at: 'sent_at'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type app_userWhereInput = {
    AND?: app_userWhereInput | app_userWhereInput[]
    OR?: app_userWhereInput[]
    NOT?: app_userWhereInput | app_userWhereInput[]
    id?: StringFilter<"app_user"> | string
    email?: StringNullableFilter<"app_user"> | string | null
    username?: StringNullableFilter<"app_user"> | string | null
    points?: IntFilter<"app_user"> | number
    created_at?: DateTimeFilter<"app_user"> | Date | string
    updated_at?: DateTimeFilter<"app_user"> | Date | string
    claims?: ClaimListRelationFilter
    listings?: ListingListRelationFilter
    notifications?: NotificationListRelationFilter
    user_pref?: XOR<User_prefNullableScalarRelationFilter, user_prefWhereInput> | null
  }

  export type app_userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    claims?: claimOrderByRelationAggregateInput
    listings?: listingOrderByRelationAggregateInput
    notifications?: notificationOrderByRelationAggregateInput
    user_pref?: user_prefOrderByWithRelationInput
  }

  export type app_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: app_userWhereInput | app_userWhereInput[]
    OR?: app_userWhereInput[]
    NOT?: app_userWhereInput | app_userWhereInput[]
    username?: StringNullableFilter<"app_user"> | string | null
    points?: IntFilter<"app_user"> | number
    created_at?: DateTimeFilter<"app_user"> | Date | string
    updated_at?: DateTimeFilter<"app_user"> | Date | string
    claims?: ClaimListRelationFilter
    listings?: ListingListRelationFilter
    notifications?: NotificationListRelationFilter
    user_pref?: XOR<User_prefNullableScalarRelationFilter, user_prefWhereInput> | null
  }, "id" | "email">

  export type app_userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: app_userCountOrderByAggregateInput
    _avg?: app_userAvgOrderByAggregateInput
    _max?: app_userMaxOrderByAggregateInput
    _min?: app_userMinOrderByAggregateInput
    _sum?: app_userSumOrderByAggregateInput
  }

  export type app_userScalarWhereWithAggregatesInput = {
    AND?: app_userScalarWhereWithAggregatesInput | app_userScalarWhereWithAggregatesInput[]
    OR?: app_userScalarWhereWithAggregatesInput[]
    NOT?: app_userScalarWhereWithAggregatesInput | app_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"app_user"> | string
    email?: StringNullableWithAggregatesFilter<"app_user"> | string | null
    username?: StringNullableWithAggregatesFilter<"app_user"> | string | null
    points?: IntWithAggregatesFilter<"app_user"> | number
    created_at?: DateTimeWithAggregatesFilter<"app_user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"app_user"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    listings?: ListingListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    listings?: listingOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    listings?: ListingListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
  }

  export type user_prefWhereInput = {
    AND?: user_prefWhereInput | user_prefWhereInput[]
    OR?: user_prefWhereInput[]
    NOT?: user_prefWhereInput | user_prefWhereInput[]
    user_id?: StringFilter<"user_pref"> | string
    notifications_on?: BoolFilter<"user_pref"> | boolean
    radius_meters?: IntFilter<"user_pref"> | number
    category_filter?: StringNullableListFilter<"user_pref">
    dark_mode?: BoolFilter<"user_pref"> | boolean
    updated_at?: DateTimeFilter<"user_pref"> | Date | string
    user?: XOR<App_userScalarRelationFilter, app_userWhereInput>
  }

  export type user_prefOrderByWithRelationInput = {
    user_id?: SortOrder
    notifications_on?: SortOrder
    radius_meters?: SortOrder
    category_filter?: SortOrder
    dark_mode?: SortOrder
    updated_at?: SortOrder
    user?: app_userOrderByWithRelationInput
  }

  export type user_prefWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: user_prefWhereInput | user_prefWhereInput[]
    OR?: user_prefWhereInput[]
    NOT?: user_prefWhereInput | user_prefWhereInput[]
    notifications_on?: BoolFilter<"user_pref"> | boolean
    radius_meters?: IntFilter<"user_pref"> | number
    category_filter?: StringNullableListFilter<"user_pref">
    dark_mode?: BoolFilter<"user_pref"> | boolean
    updated_at?: DateTimeFilter<"user_pref"> | Date | string
    user?: XOR<App_userScalarRelationFilter, app_userWhereInput>
  }, "user_id">

  export type user_prefOrderByWithAggregationInput = {
    user_id?: SortOrder
    notifications_on?: SortOrder
    radius_meters?: SortOrder
    category_filter?: SortOrder
    dark_mode?: SortOrder
    updated_at?: SortOrder
    _count?: user_prefCountOrderByAggregateInput
    _avg?: user_prefAvgOrderByAggregateInput
    _max?: user_prefMaxOrderByAggregateInput
    _min?: user_prefMinOrderByAggregateInput
    _sum?: user_prefSumOrderByAggregateInput
  }

  export type user_prefScalarWhereWithAggregatesInput = {
    AND?: user_prefScalarWhereWithAggregatesInput | user_prefScalarWhereWithAggregatesInput[]
    OR?: user_prefScalarWhereWithAggregatesInput[]
    NOT?: user_prefScalarWhereWithAggregatesInput | user_prefScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user_pref"> | string
    notifications_on?: BoolWithAggregatesFilter<"user_pref"> | boolean
    radius_meters?: IntWithAggregatesFilter<"user_pref"> | number
    category_filter?: StringNullableListFilter<"user_pref">
    dark_mode?: BoolWithAggregatesFilter<"user_pref"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"user_pref"> | Date | string
  }

  export type listingWhereInput = {
    AND?: listingWhereInput | listingWhereInput[]
    OR?: listingWhereInput[]
    NOT?: listingWhereInput | listingWhereInput[]
    id?: StringFilter<"listing"> | string
    finder_user_id?: StringFilter<"listing"> | string
    title?: StringFilter<"listing"> | string
    description?: StringNullableFilter<"listing"> | string | null
    category_id?: IntNullableFilter<"listing"> | number | null
    status?: StringFilter<"listing"> | string
    found_at?: DateTimeFilter<"listing"> | Date | string
    expires_at?: DateTimeFilter<"listing"> | Date | string
    lat?: FloatFilter<"listing"> | number
    lng?: FloatFilter<"listing"> | number
    place_name?: StringNullableFilter<"listing"> | string | null
    manual_address?: StringNullableFilter<"listing"> | string | null
    created_at?: DateTimeFilter<"listing"> | Date | string
    updated_at?: DateTimeFilter<"listing"> | Date | string
    image_url?: StringNullableFilter<"listing"> | string | null
    claims?: ClaimListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    finder?: XOR<App_userScalarRelationFilter, app_userWhereInput>
    photos?: Listing_photoListRelationFilter
  }

  export type listingOrderByWithRelationInput = {
    id?: SortOrder
    finder_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrder
    found_at?: SortOrder
    expires_at?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    place_name?: SortOrderInput | SortOrder
    manual_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrderInput | SortOrder
    claims?: claimOrderByRelationAggregateInput
    category?: categoryOrderByWithRelationInput
    finder?: app_userOrderByWithRelationInput
    photos?: listing_photoOrderByRelationAggregateInput
  }

  export type listingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: listingWhereInput | listingWhereInput[]
    OR?: listingWhereInput[]
    NOT?: listingWhereInput | listingWhereInput[]
    finder_user_id?: StringFilter<"listing"> | string
    title?: StringFilter<"listing"> | string
    description?: StringNullableFilter<"listing"> | string | null
    category_id?: IntNullableFilter<"listing"> | number | null
    status?: StringFilter<"listing"> | string
    found_at?: DateTimeFilter<"listing"> | Date | string
    expires_at?: DateTimeFilter<"listing"> | Date | string
    lat?: FloatFilter<"listing"> | number
    lng?: FloatFilter<"listing"> | number
    place_name?: StringNullableFilter<"listing"> | string | null
    manual_address?: StringNullableFilter<"listing"> | string | null
    created_at?: DateTimeFilter<"listing"> | Date | string
    updated_at?: DateTimeFilter<"listing"> | Date | string
    image_url?: StringNullableFilter<"listing"> | string | null
    claims?: ClaimListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    finder?: XOR<App_userScalarRelationFilter, app_userWhereInput>
    photos?: Listing_photoListRelationFilter
  }, "id">

  export type listingOrderByWithAggregationInput = {
    id?: SortOrder
    finder_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrder
    found_at?: SortOrder
    expires_at?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    place_name?: SortOrderInput | SortOrder
    manual_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: listingCountOrderByAggregateInput
    _avg?: listingAvgOrderByAggregateInput
    _max?: listingMaxOrderByAggregateInput
    _min?: listingMinOrderByAggregateInput
    _sum?: listingSumOrderByAggregateInput
  }

  export type listingScalarWhereWithAggregatesInput = {
    AND?: listingScalarWhereWithAggregatesInput | listingScalarWhereWithAggregatesInput[]
    OR?: listingScalarWhereWithAggregatesInput[]
    NOT?: listingScalarWhereWithAggregatesInput | listingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"listing"> | string
    finder_user_id?: StringWithAggregatesFilter<"listing"> | string
    title?: StringWithAggregatesFilter<"listing"> | string
    description?: StringNullableWithAggregatesFilter<"listing"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"listing"> | number | null
    status?: StringWithAggregatesFilter<"listing"> | string
    found_at?: DateTimeWithAggregatesFilter<"listing"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"listing"> | Date | string
    lat?: FloatWithAggregatesFilter<"listing"> | number
    lng?: FloatWithAggregatesFilter<"listing"> | number
    place_name?: StringNullableWithAggregatesFilter<"listing"> | string | null
    manual_address?: StringNullableWithAggregatesFilter<"listing"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"listing"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"listing"> | Date | string
    image_url?: StringNullableWithAggregatesFilter<"listing"> | string | null
  }

  export type listing_photoWhereInput = {
    AND?: listing_photoWhereInput | listing_photoWhereInput[]
    OR?: listing_photoWhereInput[]
    NOT?: listing_photoWhereInput | listing_photoWhereInput[]
    id?: StringFilter<"listing_photo"> | string
    listing_id?: StringFilter<"listing_photo"> | string
    url?: StringFilter<"listing_photo"> | string
    storage_key?: StringNullableFilter<"listing_photo"> | string | null
    sort_order?: IntFilter<"listing_photo"> | number
    uploaded_at?: DateTimeFilter<"listing_photo"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, listingWhereInput>
  }

  export type listing_photoOrderByWithRelationInput = {
    id?: SortOrder
    listing_id?: SortOrder
    url?: SortOrder
    storage_key?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
    listing?: listingOrderByWithRelationInput
  }

  export type listing_photoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: listing_photoWhereInput | listing_photoWhereInput[]
    OR?: listing_photoWhereInput[]
    NOT?: listing_photoWhereInput | listing_photoWhereInput[]
    listing_id?: StringFilter<"listing_photo"> | string
    url?: StringFilter<"listing_photo"> | string
    storage_key?: StringNullableFilter<"listing_photo"> | string | null
    sort_order?: IntFilter<"listing_photo"> | number
    uploaded_at?: DateTimeFilter<"listing_photo"> | Date | string
    listing?: XOR<ListingScalarRelationFilter, listingWhereInput>
  }, "id">

  export type listing_photoOrderByWithAggregationInput = {
    id?: SortOrder
    listing_id?: SortOrder
    url?: SortOrder
    storage_key?: SortOrderInput | SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
    _count?: listing_photoCountOrderByAggregateInput
    _avg?: listing_photoAvgOrderByAggregateInput
    _max?: listing_photoMaxOrderByAggregateInput
    _min?: listing_photoMinOrderByAggregateInput
    _sum?: listing_photoSumOrderByAggregateInput
  }

  export type listing_photoScalarWhereWithAggregatesInput = {
    AND?: listing_photoScalarWhereWithAggregatesInput | listing_photoScalarWhereWithAggregatesInput[]
    OR?: listing_photoScalarWhereWithAggregatesInput[]
    NOT?: listing_photoScalarWhereWithAggregatesInput | listing_photoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"listing_photo"> | string
    listing_id?: StringWithAggregatesFilter<"listing_photo"> | string
    url?: StringWithAggregatesFilter<"listing_photo"> | string
    storage_key?: StringNullableWithAggregatesFilter<"listing_photo"> | string | null
    sort_order?: IntWithAggregatesFilter<"listing_photo"> | number
    uploaded_at?: DateTimeWithAggregatesFilter<"listing_photo"> | Date | string
  }

  export type claimWhereInput = {
    AND?: claimWhereInput | claimWhereInput[]
    OR?: claimWhereInput[]
    NOT?: claimWhereInput | claimWhereInput[]
    id?: StringFilter<"claim"> | string
    listing_id?: StringFilter<"claim"> | string
    claimer_user_id?: StringFilter<"claim"> | string
    status?: StringFilter<"claim"> | string
    message?: StringNullableFilter<"claim"> | string | null
    created_at?: DateTimeFilter<"claim"> | Date | string
    claimer?: XOR<App_userScalarRelationFilter, app_userWhereInput>
    listing?: XOR<ListingScalarRelationFilter, listingWhereInput>
  }

  export type claimOrderByWithRelationInput = {
    id?: SortOrder
    listing_id?: SortOrder
    claimer_user_id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    claimer?: app_userOrderByWithRelationInput
    listing?: listingOrderByWithRelationInput
  }

  export type claimWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: claimWhereInput | claimWhereInput[]
    OR?: claimWhereInput[]
    NOT?: claimWhereInput | claimWhereInput[]
    listing_id?: StringFilter<"claim"> | string
    claimer_user_id?: StringFilter<"claim"> | string
    status?: StringFilter<"claim"> | string
    message?: StringNullableFilter<"claim"> | string | null
    created_at?: DateTimeFilter<"claim"> | Date | string
    claimer?: XOR<App_userScalarRelationFilter, app_userWhereInput>
    listing?: XOR<ListingScalarRelationFilter, listingWhereInput>
  }, "id">

  export type claimOrderByWithAggregationInput = {
    id?: SortOrder
    listing_id?: SortOrder
    claimer_user_id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: claimCountOrderByAggregateInput
    _max?: claimMaxOrderByAggregateInput
    _min?: claimMinOrderByAggregateInput
  }

  export type claimScalarWhereWithAggregatesInput = {
    AND?: claimScalarWhereWithAggregatesInput | claimScalarWhereWithAggregatesInput[]
    OR?: claimScalarWhereWithAggregatesInput[]
    NOT?: claimScalarWhereWithAggregatesInput | claimScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"claim"> | string
    listing_id?: StringWithAggregatesFilter<"claim"> | string
    claimer_user_id?: StringWithAggregatesFilter<"claim"> | string
    status?: StringWithAggregatesFilter<"claim"> | string
    message?: StringNullableWithAggregatesFilter<"claim"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"claim"> | Date | string
  }

  export type notificationWhereInput = {
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    id?: StringFilter<"notification"> | string
    user_id?: StringFilter<"notification"> | string
    type?: StringFilter<"notification"> | string
    channel?: StringFilter<"notification"> | string
    payload?: JsonFilter<"notification">
    status?: StringFilter<"notification"> | string
    created_at?: DateTimeFilter<"notification"> | Date | string
    sent_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    user?: XOR<App_userScalarRelationFilter, app_userWhereInput>
  }

  export type notificationOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    user?: app_userOrderByWithRelationInput
  }

  export type notificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: notificationWhereInput | notificationWhereInput[]
    OR?: notificationWhereInput[]
    NOT?: notificationWhereInput | notificationWhereInput[]
    user_id?: StringFilter<"notification"> | string
    type?: StringFilter<"notification"> | string
    channel?: StringFilter<"notification"> | string
    payload?: JsonFilter<"notification">
    status?: StringFilter<"notification"> | string
    created_at?: DateTimeFilter<"notification"> | Date | string
    sent_at?: DateTimeNullableFilter<"notification"> | Date | string | null
    user?: XOR<App_userScalarRelationFilter, app_userWhereInput>
  }, "id">

  export type notificationOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    sent_at?: SortOrderInput | SortOrder
    _count?: notificationCountOrderByAggregateInput
    _max?: notificationMaxOrderByAggregateInput
    _min?: notificationMinOrderByAggregateInput
  }

  export type notificationScalarWhereWithAggregatesInput = {
    AND?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    OR?: notificationScalarWhereWithAggregatesInput[]
    NOT?: notificationScalarWhereWithAggregatesInput | notificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"notification"> | string
    user_id?: StringWithAggregatesFilter<"notification"> | string
    type?: StringWithAggregatesFilter<"notification"> | string
    channel?: StringWithAggregatesFilter<"notification"> | string
    payload?: JsonWithAggregatesFilter<"notification">
    status?: StringWithAggregatesFilter<"notification"> | string
    created_at?: DateTimeWithAggregatesFilter<"notification"> | Date | string
    sent_at?: DateTimeNullableWithAggregatesFilter<"notification"> | Date | string | null
  }

  export type app_userCreateInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimCreateNestedManyWithoutClaimerInput
    listings?: listingCreateNestedManyWithoutFinderInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    user_pref?: user_prefCreateNestedOneWithoutUserInput
  }

  export type app_userUncheckedCreateInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutClaimerInput
    listings?: listingUncheckedCreateNestedManyWithoutFinderInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    user_pref?: user_prefUncheckedCreateNestedOneWithoutUserInput
  }

  export type app_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutClaimerNestedInput
    listings?: listingUpdateManyWithoutFinderNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUpdateOneWithoutUserNestedInput
  }

  export type app_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutClaimerNestedInput
    listings?: listingUncheckedUpdateManyWithoutFinderNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUncheckedUpdateOneWithoutUserNestedInput
  }

  export type app_userCreateManyInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type app_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type app_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    id: number
    name: string
    listings?: listingCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id: number
    name: string
    listings?: listingUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listings?: listingUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    listings?: listingUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id: number
    name: string
  }

  export type categoryUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type user_prefCreateInput = {
    notifications_on?: boolean
    radius_meters?: number
    category_filter?: user_prefCreatecategory_filterInput | string[]
    dark_mode?: boolean
    updated_at?: Date | string
    user: app_userCreateNestedOneWithoutUser_prefInput
  }

  export type user_prefUncheckedCreateInput = {
    user_id: string
    notifications_on?: boolean
    radius_meters?: number
    category_filter?: user_prefCreatecategory_filterInput | string[]
    dark_mode?: boolean
    updated_at?: Date | string
  }

  export type user_prefUpdateInput = {
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: app_userUpdateOneRequiredWithoutUser_prefNestedInput
  }

  export type user_prefUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_prefCreateManyInput = {
    user_id: string
    notifications_on?: boolean
    radius_meters?: number
    category_filter?: user_prefCreatecategory_filterInput | string[]
    dark_mode?: boolean
    updated_at?: Date | string
  }

  export type user_prefUpdateManyMutationInput = {
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_prefUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listingCreateInput = {
    id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimCreateNestedManyWithoutListingInput
    category?: categoryCreateNestedOneWithoutListingsInput
    finder: app_userCreateNestedOneWithoutListingsInput
    photos?: listing_photoCreateNestedManyWithoutListingInput
  }

  export type listingUncheckedCreateInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimUncheckedCreateNestedManyWithoutListingInput
    photos?: listing_photoUncheckedCreateNestedManyWithoutListingInput
  }

  export type listingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUpdateManyWithoutListingNestedInput
    category?: categoryUpdateOneWithoutListingsNestedInput
    finder?: app_userUpdateOneRequiredWithoutListingsNestedInput
    photos?: listing_photoUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUncheckedUpdateManyWithoutListingNestedInput
    photos?: listing_photoUncheckedUpdateManyWithoutListingNestedInput
  }

  export type listingCreateManyInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type listingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type listingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type listing_photoCreateInput = {
    id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
    listing: listingCreateNestedOneWithoutPhotosInput
  }

  export type listing_photoUncheckedCreateInput = {
    id: string
    listing_id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type listing_photoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: listingUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type listing_photoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_photoCreateManyInput = {
    id: string
    listing_id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type listing_photoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_photoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimCreateInput = {
    id: string
    status?: string
    message?: string | null
    created_at?: Date | string
    claimer: app_userCreateNestedOneWithoutClaimsInput
    listing: listingCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateInput = {
    id: string
    listing_id: string
    claimer_user_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type claimUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claimer?: app_userUpdateOneRequiredWithoutClaimsNestedInput
    listing?: listingUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    claimer_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimCreateManyInput = {
    id: string
    listing_id: string
    claimer_user_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type claimUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    claimer_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationCreateInput = {
    id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
    user: app_userCreateNestedOneWithoutNotificationsInput
  }

  export type notificationUncheckedCreateInput = {
    id: string
    user_id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
  }

  export type notificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: app_userUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type notificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationCreateManyInput = {
    id: string
    user_id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
  }

  export type notificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ClaimListRelationFilter = {
    every?: claimWhereInput
    some?: claimWhereInput
    none?: claimWhereInput
  }

  export type ListingListRelationFilter = {
    every?: listingWhereInput
    some?: listingWhereInput
    none?: listingWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: notificationWhereInput
    some?: notificationWhereInput
    none?: notificationWhereInput
  }

  export type User_prefNullableScalarRelationFilter = {
    is?: user_prefWhereInput | null
    isNot?: user_prefWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type claimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type app_userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type app_userAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type app_userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type app_userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    points?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type app_userSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type App_userScalarRelationFilter = {
    is?: app_userWhereInput
    isNot?: app_userWhereInput
  }

  export type user_prefCountOrderByAggregateInput = {
    user_id?: SortOrder
    notifications_on?: SortOrder
    radius_meters?: SortOrder
    category_filter?: SortOrder
    dark_mode?: SortOrder
    updated_at?: SortOrder
  }

  export type user_prefAvgOrderByAggregateInput = {
    radius_meters?: SortOrder
  }

  export type user_prefMaxOrderByAggregateInput = {
    user_id?: SortOrder
    notifications_on?: SortOrder
    radius_meters?: SortOrder
    dark_mode?: SortOrder
    updated_at?: SortOrder
  }

  export type user_prefMinOrderByAggregateInput = {
    user_id?: SortOrder
    notifications_on?: SortOrder
    radius_meters?: SortOrder
    dark_mode?: SortOrder
    updated_at?: SortOrder
  }

  export type user_prefSumOrderByAggregateInput = {
    radius_meters?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type Listing_photoListRelationFilter = {
    every?: listing_photoWhereInput
    some?: listing_photoWhereInput
    none?: listing_photoWhereInput
  }

  export type listing_photoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listingCountOrderByAggregateInput = {
    id?: SortOrder
    finder_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    found_at?: SortOrder
    expires_at?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    place_name?: SortOrder
    manual_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type listingAvgOrderByAggregateInput = {
    category_id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type listingMaxOrderByAggregateInput = {
    id?: SortOrder
    finder_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    found_at?: SortOrder
    expires_at?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    place_name?: SortOrder
    manual_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type listingMinOrderByAggregateInput = {
    id?: SortOrder
    finder_user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    found_at?: SortOrder
    expires_at?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    place_name?: SortOrder
    manual_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type listingSumOrderByAggregateInput = {
    category_id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ListingScalarRelationFilter = {
    is?: listingWhereInput
    isNot?: listingWhereInput
  }

  export type listing_photoCountOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    url?: SortOrder
    storage_key?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type listing_photoAvgOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type listing_photoMaxOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    url?: SortOrder
    storage_key?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type listing_photoMinOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    url?: SortOrder
    storage_key?: SortOrder
    sort_order?: SortOrder
    uploaded_at?: SortOrder
  }

  export type listing_photoSumOrderByAggregateInput = {
    sort_order?: SortOrder
  }

  export type claimCountOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    claimer_user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type claimMaxOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    claimer_user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type claimMinOrderByAggregateInput = {
    id?: SortOrder
    listing_id?: SortOrder
    claimer_user_id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type notificationCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    sent_at?: SortOrder
  }

  export type notificationMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    sent_at?: SortOrder
  }

  export type notificationMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    channel?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    sent_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type claimCreateNestedManyWithoutClaimerInput = {
    create?: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput> | claimCreateWithoutClaimerInput[] | claimUncheckedCreateWithoutClaimerInput[]
    connectOrCreate?: claimCreateOrConnectWithoutClaimerInput | claimCreateOrConnectWithoutClaimerInput[]
    createMany?: claimCreateManyClaimerInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type listingCreateNestedManyWithoutFinderInput = {
    create?: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput> | listingCreateWithoutFinderInput[] | listingUncheckedCreateWithoutFinderInput[]
    connectOrCreate?: listingCreateOrConnectWithoutFinderInput | listingCreateOrConnectWithoutFinderInput[]
    createMany?: listingCreateManyFinderInputEnvelope
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
  }

  export type notificationCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type user_prefCreateNestedOneWithoutUserInput = {
    create?: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_prefCreateOrConnectWithoutUserInput
    connect?: user_prefWhereUniqueInput
  }

  export type claimUncheckedCreateNestedManyWithoutClaimerInput = {
    create?: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput> | claimCreateWithoutClaimerInput[] | claimUncheckedCreateWithoutClaimerInput[]
    connectOrCreate?: claimCreateOrConnectWithoutClaimerInput | claimCreateOrConnectWithoutClaimerInput[]
    createMany?: claimCreateManyClaimerInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type listingUncheckedCreateNestedManyWithoutFinderInput = {
    create?: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput> | listingCreateWithoutFinderInput[] | listingUncheckedCreateWithoutFinderInput[]
    connectOrCreate?: listingCreateOrConnectWithoutFinderInput | listingCreateOrConnectWithoutFinderInput[]
    createMany?: listingCreateManyFinderInputEnvelope
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
  }

  export type notificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
  }

  export type user_prefUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_prefCreateOrConnectWithoutUserInput
    connect?: user_prefWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type claimUpdateManyWithoutClaimerNestedInput = {
    create?: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput> | claimCreateWithoutClaimerInput[] | claimUncheckedCreateWithoutClaimerInput[]
    connectOrCreate?: claimCreateOrConnectWithoutClaimerInput | claimCreateOrConnectWithoutClaimerInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutClaimerInput | claimUpsertWithWhereUniqueWithoutClaimerInput[]
    createMany?: claimCreateManyClaimerInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutClaimerInput | claimUpdateWithWhereUniqueWithoutClaimerInput[]
    updateMany?: claimUpdateManyWithWhereWithoutClaimerInput | claimUpdateManyWithWhereWithoutClaimerInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type listingUpdateManyWithoutFinderNestedInput = {
    create?: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput> | listingCreateWithoutFinderInput[] | listingUncheckedCreateWithoutFinderInput[]
    connectOrCreate?: listingCreateOrConnectWithoutFinderInput | listingCreateOrConnectWithoutFinderInput[]
    upsert?: listingUpsertWithWhereUniqueWithoutFinderInput | listingUpsertWithWhereUniqueWithoutFinderInput[]
    createMany?: listingCreateManyFinderInputEnvelope
    set?: listingWhereUniqueInput | listingWhereUniqueInput[]
    disconnect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    delete?: listingWhereUniqueInput | listingWhereUniqueInput[]
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    update?: listingUpdateWithWhereUniqueWithoutFinderInput | listingUpdateWithWhereUniqueWithoutFinderInput[]
    updateMany?: listingUpdateManyWithWhereWithoutFinderInput | listingUpdateManyWithWhereWithoutFinderInput[]
    deleteMany?: listingScalarWhereInput | listingScalarWhereInput[]
  }

  export type notificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type user_prefUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_prefCreateOrConnectWithoutUserInput
    upsert?: user_prefUpsertWithoutUserInput
    disconnect?: user_prefWhereInput | boolean
    delete?: user_prefWhereInput | boolean
    connect?: user_prefWhereUniqueInput
    update?: XOR<XOR<user_prefUpdateToOneWithWhereWithoutUserInput, user_prefUpdateWithoutUserInput>, user_prefUncheckedUpdateWithoutUserInput>
  }

  export type claimUncheckedUpdateManyWithoutClaimerNestedInput = {
    create?: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput> | claimCreateWithoutClaimerInput[] | claimUncheckedCreateWithoutClaimerInput[]
    connectOrCreate?: claimCreateOrConnectWithoutClaimerInput | claimCreateOrConnectWithoutClaimerInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutClaimerInput | claimUpsertWithWhereUniqueWithoutClaimerInput[]
    createMany?: claimCreateManyClaimerInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutClaimerInput | claimUpdateWithWhereUniqueWithoutClaimerInput[]
    updateMany?: claimUpdateManyWithWhereWithoutClaimerInput | claimUpdateManyWithWhereWithoutClaimerInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type listingUncheckedUpdateManyWithoutFinderNestedInput = {
    create?: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput> | listingCreateWithoutFinderInput[] | listingUncheckedCreateWithoutFinderInput[]
    connectOrCreate?: listingCreateOrConnectWithoutFinderInput | listingCreateOrConnectWithoutFinderInput[]
    upsert?: listingUpsertWithWhereUniqueWithoutFinderInput | listingUpsertWithWhereUniqueWithoutFinderInput[]
    createMany?: listingCreateManyFinderInputEnvelope
    set?: listingWhereUniqueInput | listingWhereUniqueInput[]
    disconnect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    delete?: listingWhereUniqueInput | listingWhereUniqueInput[]
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    update?: listingUpdateWithWhereUniqueWithoutFinderInput | listingUpdateWithWhereUniqueWithoutFinderInput[]
    updateMany?: listingUpdateManyWithWhereWithoutFinderInput | listingUpdateManyWithWhereWithoutFinderInput[]
    deleteMany?: listingScalarWhereInput | listingScalarWhereInput[]
  }

  export type notificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput> | notificationCreateWithoutUserInput[] | notificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationCreateOrConnectWithoutUserInput | notificationCreateOrConnectWithoutUserInput[]
    upsert?: notificationUpsertWithWhereUniqueWithoutUserInput | notificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationCreateManyUserInputEnvelope
    set?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    disconnect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    delete?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    connect?: notificationWhereUniqueInput | notificationWhereUniqueInput[]
    update?: notificationUpdateWithWhereUniqueWithoutUserInput | notificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationUpdateManyWithWhereWithoutUserInput | notificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationScalarWhereInput | notificationScalarWhereInput[]
  }

  export type user_prefUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
    connectOrCreate?: user_prefCreateOrConnectWithoutUserInput
    upsert?: user_prefUpsertWithoutUserInput
    disconnect?: user_prefWhereInput | boolean
    delete?: user_prefWhereInput | boolean
    connect?: user_prefWhereUniqueInput
    update?: XOR<XOR<user_prefUpdateToOneWithWhereWithoutUserInput, user_prefUpdateWithoutUserInput>, user_prefUncheckedUpdateWithoutUserInput>
  }

  export type listingCreateNestedManyWithoutCategoryInput = {
    create?: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput> | listingCreateWithoutCategoryInput[] | listingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: listingCreateOrConnectWithoutCategoryInput | listingCreateOrConnectWithoutCategoryInput[]
    createMany?: listingCreateManyCategoryInputEnvelope
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
  }

  export type listingUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput> | listingCreateWithoutCategoryInput[] | listingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: listingCreateOrConnectWithoutCategoryInput | listingCreateOrConnectWithoutCategoryInput[]
    createMany?: listingCreateManyCategoryInputEnvelope
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
  }

  export type listingUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput> | listingCreateWithoutCategoryInput[] | listingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: listingCreateOrConnectWithoutCategoryInput | listingCreateOrConnectWithoutCategoryInput[]
    upsert?: listingUpsertWithWhereUniqueWithoutCategoryInput | listingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: listingCreateManyCategoryInputEnvelope
    set?: listingWhereUniqueInput | listingWhereUniqueInput[]
    disconnect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    delete?: listingWhereUniqueInput | listingWhereUniqueInput[]
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    update?: listingUpdateWithWhereUniqueWithoutCategoryInput | listingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: listingUpdateManyWithWhereWithoutCategoryInput | listingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: listingScalarWhereInput | listingScalarWhereInput[]
  }

  export type listingUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput> | listingCreateWithoutCategoryInput[] | listingUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: listingCreateOrConnectWithoutCategoryInput | listingCreateOrConnectWithoutCategoryInput[]
    upsert?: listingUpsertWithWhereUniqueWithoutCategoryInput | listingUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: listingCreateManyCategoryInputEnvelope
    set?: listingWhereUniqueInput | listingWhereUniqueInput[]
    disconnect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    delete?: listingWhereUniqueInput | listingWhereUniqueInput[]
    connect?: listingWhereUniqueInput | listingWhereUniqueInput[]
    update?: listingUpdateWithWhereUniqueWithoutCategoryInput | listingUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: listingUpdateManyWithWhereWithoutCategoryInput | listingUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: listingScalarWhereInput | listingScalarWhereInput[]
  }

  export type user_prefCreatecategory_filterInput = {
    set: string[]
  }

  export type app_userCreateNestedOneWithoutUser_prefInput = {
    create?: XOR<app_userCreateWithoutUser_prefInput, app_userUncheckedCreateWithoutUser_prefInput>
    connectOrCreate?: app_userCreateOrConnectWithoutUser_prefInput
    connect?: app_userWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type user_prefUpdatecategory_filterInput = {
    set?: string[]
    push?: string | string[]
  }

  export type app_userUpdateOneRequiredWithoutUser_prefNestedInput = {
    create?: XOR<app_userCreateWithoutUser_prefInput, app_userUncheckedCreateWithoutUser_prefInput>
    connectOrCreate?: app_userCreateOrConnectWithoutUser_prefInput
    upsert?: app_userUpsertWithoutUser_prefInput
    connect?: app_userWhereUniqueInput
    update?: XOR<XOR<app_userUpdateToOneWithWhereWithoutUser_prefInput, app_userUpdateWithoutUser_prefInput>, app_userUncheckedUpdateWithoutUser_prefInput>
  }

  export type claimCreateNestedManyWithoutListingInput = {
    create?: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput> | claimCreateWithoutListingInput[] | claimUncheckedCreateWithoutListingInput[]
    connectOrCreate?: claimCreateOrConnectWithoutListingInput | claimCreateOrConnectWithoutListingInput[]
    createMany?: claimCreateManyListingInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutListingsInput = {
    create?: XOR<categoryCreateWithoutListingsInput, categoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutListingsInput
    connect?: categoryWhereUniqueInput
  }

  export type app_userCreateNestedOneWithoutListingsInput = {
    create?: XOR<app_userCreateWithoutListingsInput, app_userUncheckedCreateWithoutListingsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutListingsInput
    connect?: app_userWhereUniqueInput
  }

  export type listing_photoCreateNestedManyWithoutListingInput = {
    create?: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput> | listing_photoCreateWithoutListingInput[] | listing_photoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: listing_photoCreateOrConnectWithoutListingInput | listing_photoCreateOrConnectWithoutListingInput[]
    createMany?: listing_photoCreateManyListingInputEnvelope
    connect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
  }

  export type claimUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput> | claimCreateWithoutListingInput[] | claimUncheckedCreateWithoutListingInput[]
    connectOrCreate?: claimCreateOrConnectWithoutListingInput | claimCreateOrConnectWithoutListingInput[]
    createMany?: claimCreateManyListingInputEnvelope
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
  }

  export type listing_photoUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput> | listing_photoCreateWithoutListingInput[] | listing_photoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: listing_photoCreateOrConnectWithoutListingInput | listing_photoCreateOrConnectWithoutListingInput[]
    createMany?: listing_photoCreateManyListingInputEnvelope
    connect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type claimUpdateManyWithoutListingNestedInput = {
    create?: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput> | claimCreateWithoutListingInput[] | claimUncheckedCreateWithoutListingInput[]
    connectOrCreate?: claimCreateOrConnectWithoutListingInput | claimCreateOrConnectWithoutListingInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutListingInput | claimUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: claimCreateManyListingInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutListingInput | claimUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: claimUpdateManyWithWhereWithoutListingInput | claimUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type categoryUpdateOneWithoutListingsNestedInput = {
    create?: XOR<categoryCreateWithoutListingsInput, categoryUncheckedCreateWithoutListingsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutListingsInput
    upsert?: categoryUpsertWithoutListingsInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutListingsInput, categoryUpdateWithoutListingsInput>, categoryUncheckedUpdateWithoutListingsInput>
  }

  export type app_userUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<app_userCreateWithoutListingsInput, app_userUncheckedCreateWithoutListingsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutListingsInput
    upsert?: app_userUpsertWithoutListingsInput
    connect?: app_userWhereUniqueInput
    update?: XOR<XOR<app_userUpdateToOneWithWhereWithoutListingsInput, app_userUpdateWithoutListingsInput>, app_userUncheckedUpdateWithoutListingsInput>
  }

  export type listing_photoUpdateManyWithoutListingNestedInput = {
    create?: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput> | listing_photoCreateWithoutListingInput[] | listing_photoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: listing_photoCreateOrConnectWithoutListingInput | listing_photoCreateOrConnectWithoutListingInput[]
    upsert?: listing_photoUpsertWithWhereUniqueWithoutListingInput | listing_photoUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: listing_photoCreateManyListingInputEnvelope
    set?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    disconnect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    delete?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    connect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    update?: listing_photoUpdateWithWhereUniqueWithoutListingInput | listing_photoUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: listing_photoUpdateManyWithWhereWithoutListingInput | listing_photoUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: listing_photoScalarWhereInput | listing_photoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type claimUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput> | claimCreateWithoutListingInput[] | claimUncheckedCreateWithoutListingInput[]
    connectOrCreate?: claimCreateOrConnectWithoutListingInput | claimCreateOrConnectWithoutListingInput[]
    upsert?: claimUpsertWithWhereUniqueWithoutListingInput | claimUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: claimCreateManyListingInputEnvelope
    set?: claimWhereUniqueInput | claimWhereUniqueInput[]
    disconnect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    delete?: claimWhereUniqueInput | claimWhereUniqueInput[]
    connect?: claimWhereUniqueInput | claimWhereUniqueInput[]
    update?: claimUpdateWithWhereUniqueWithoutListingInput | claimUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: claimUpdateManyWithWhereWithoutListingInput | claimUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: claimScalarWhereInput | claimScalarWhereInput[]
  }

  export type listing_photoUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput> | listing_photoCreateWithoutListingInput[] | listing_photoUncheckedCreateWithoutListingInput[]
    connectOrCreate?: listing_photoCreateOrConnectWithoutListingInput | listing_photoCreateOrConnectWithoutListingInput[]
    upsert?: listing_photoUpsertWithWhereUniqueWithoutListingInput | listing_photoUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: listing_photoCreateManyListingInputEnvelope
    set?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    disconnect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    delete?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    connect?: listing_photoWhereUniqueInput | listing_photoWhereUniqueInput[]
    update?: listing_photoUpdateWithWhereUniqueWithoutListingInput | listing_photoUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: listing_photoUpdateManyWithWhereWithoutListingInput | listing_photoUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: listing_photoScalarWhereInput | listing_photoScalarWhereInput[]
  }

  export type listingCreateNestedOneWithoutPhotosInput = {
    create?: XOR<listingCreateWithoutPhotosInput, listingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: listingCreateOrConnectWithoutPhotosInput
    connect?: listingWhereUniqueInput
  }

  export type listingUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<listingCreateWithoutPhotosInput, listingUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: listingCreateOrConnectWithoutPhotosInput
    upsert?: listingUpsertWithoutPhotosInput
    connect?: listingWhereUniqueInput
    update?: XOR<XOR<listingUpdateToOneWithWhereWithoutPhotosInput, listingUpdateWithoutPhotosInput>, listingUncheckedUpdateWithoutPhotosInput>
  }

  export type app_userCreateNestedOneWithoutClaimsInput = {
    create?: XOR<app_userCreateWithoutClaimsInput, app_userUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutClaimsInput
    connect?: app_userWhereUniqueInput
  }

  export type listingCreateNestedOneWithoutClaimsInput = {
    create?: XOR<listingCreateWithoutClaimsInput, listingUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: listingCreateOrConnectWithoutClaimsInput
    connect?: listingWhereUniqueInput
  }

  export type app_userUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<app_userCreateWithoutClaimsInput, app_userUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutClaimsInput
    upsert?: app_userUpsertWithoutClaimsInput
    connect?: app_userWhereUniqueInput
    update?: XOR<XOR<app_userUpdateToOneWithWhereWithoutClaimsInput, app_userUpdateWithoutClaimsInput>, app_userUncheckedUpdateWithoutClaimsInput>
  }

  export type listingUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<listingCreateWithoutClaimsInput, listingUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: listingCreateOrConnectWithoutClaimsInput
    upsert?: listingUpsertWithoutClaimsInput
    connect?: listingWhereUniqueInput
    update?: XOR<XOR<listingUpdateToOneWithWhereWithoutClaimsInput, listingUpdateWithoutClaimsInput>, listingUncheckedUpdateWithoutClaimsInput>
  }

  export type app_userCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<app_userCreateWithoutNotificationsInput, app_userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutNotificationsInput
    connect?: app_userWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type app_userUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<app_userCreateWithoutNotificationsInput, app_userUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: app_userCreateOrConnectWithoutNotificationsInput
    upsert?: app_userUpsertWithoutNotificationsInput
    connect?: app_userWhereUniqueInput
    update?: XOR<XOR<app_userUpdateToOneWithWhereWithoutNotificationsInput, app_userUpdateWithoutNotificationsInput>, app_userUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type claimCreateWithoutClaimerInput = {
    id: string
    status?: string
    message?: string | null
    created_at?: Date | string
    listing: listingCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateWithoutClaimerInput = {
    id: string
    listing_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type claimCreateOrConnectWithoutClaimerInput = {
    where: claimWhereUniqueInput
    create: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput>
  }

  export type claimCreateManyClaimerInputEnvelope = {
    data: claimCreateManyClaimerInput | claimCreateManyClaimerInput[]
    skipDuplicates?: boolean
  }

  export type listingCreateWithoutFinderInput = {
    id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimCreateNestedManyWithoutListingInput
    category?: categoryCreateNestedOneWithoutListingsInput
    photos?: listing_photoCreateNestedManyWithoutListingInput
  }

  export type listingUncheckedCreateWithoutFinderInput = {
    id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimUncheckedCreateNestedManyWithoutListingInput
    photos?: listing_photoUncheckedCreateNestedManyWithoutListingInput
  }

  export type listingCreateOrConnectWithoutFinderInput = {
    where: listingWhereUniqueInput
    create: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput>
  }

  export type listingCreateManyFinderInputEnvelope = {
    data: listingCreateManyFinderInput | listingCreateManyFinderInput[]
    skipDuplicates?: boolean
  }

  export type notificationCreateWithoutUserInput = {
    id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
  }

  export type notificationUncheckedCreateWithoutUserInput = {
    id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
  }

  export type notificationCreateOrConnectWithoutUserInput = {
    where: notificationWhereUniqueInput
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationCreateManyUserInputEnvelope = {
    data: notificationCreateManyUserInput | notificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_prefCreateWithoutUserInput = {
    notifications_on?: boolean
    radius_meters?: number
    category_filter?: user_prefCreatecategory_filterInput | string[]
    dark_mode?: boolean
    updated_at?: Date | string
  }

  export type user_prefUncheckedCreateWithoutUserInput = {
    notifications_on?: boolean
    radius_meters?: number
    category_filter?: user_prefCreatecategory_filterInput | string[]
    dark_mode?: boolean
    updated_at?: Date | string
  }

  export type user_prefCreateOrConnectWithoutUserInput = {
    where: user_prefWhereUniqueInput
    create: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
  }

  export type claimUpsertWithWhereUniqueWithoutClaimerInput = {
    where: claimWhereUniqueInput
    update: XOR<claimUpdateWithoutClaimerInput, claimUncheckedUpdateWithoutClaimerInput>
    create: XOR<claimCreateWithoutClaimerInput, claimUncheckedCreateWithoutClaimerInput>
  }

  export type claimUpdateWithWhereUniqueWithoutClaimerInput = {
    where: claimWhereUniqueInput
    data: XOR<claimUpdateWithoutClaimerInput, claimUncheckedUpdateWithoutClaimerInput>
  }

  export type claimUpdateManyWithWhereWithoutClaimerInput = {
    where: claimScalarWhereInput
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyWithoutClaimerInput>
  }

  export type claimScalarWhereInput = {
    AND?: claimScalarWhereInput | claimScalarWhereInput[]
    OR?: claimScalarWhereInput[]
    NOT?: claimScalarWhereInput | claimScalarWhereInput[]
    id?: StringFilter<"claim"> | string
    listing_id?: StringFilter<"claim"> | string
    claimer_user_id?: StringFilter<"claim"> | string
    status?: StringFilter<"claim"> | string
    message?: StringNullableFilter<"claim"> | string | null
    created_at?: DateTimeFilter<"claim"> | Date | string
  }

  export type listingUpsertWithWhereUniqueWithoutFinderInput = {
    where: listingWhereUniqueInput
    update: XOR<listingUpdateWithoutFinderInput, listingUncheckedUpdateWithoutFinderInput>
    create: XOR<listingCreateWithoutFinderInput, listingUncheckedCreateWithoutFinderInput>
  }

  export type listingUpdateWithWhereUniqueWithoutFinderInput = {
    where: listingWhereUniqueInput
    data: XOR<listingUpdateWithoutFinderInput, listingUncheckedUpdateWithoutFinderInput>
  }

  export type listingUpdateManyWithWhereWithoutFinderInput = {
    where: listingScalarWhereInput
    data: XOR<listingUpdateManyMutationInput, listingUncheckedUpdateManyWithoutFinderInput>
  }

  export type listingScalarWhereInput = {
    AND?: listingScalarWhereInput | listingScalarWhereInput[]
    OR?: listingScalarWhereInput[]
    NOT?: listingScalarWhereInput | listingScalarWhereInput[]
    id?: StringFilter<"listing"> | string
    finder_user_id?: StringFilter<"listing"> | string
    title?: StringFilter<"listing"> | string
    description?: StringNullableFilter<"listing"> | string | null
    category_id?: IntNullableFilter<"listing"> | number | null
    status?: StringFilter<"listing"> | string
    found_at?: DateTimeFilter<"listing"> | Date | string
    expires_at?: DateTimeFilter<"listing"> | Date | string
    lat?: FloatFilter<"listing"> | number
    lng?: FloatFilter<"listing"> | number
    place_name?: StringNullableFilter<"listing"> | string | null
    manual_address?: StringNullableFilter<"listing"> | string | null
    created_at?: DateTimeFilter<"listing"> | Date | string
    updated_at?: DateTimeFilter<"listing"> | Date | string
    image_url?: StringNullableFilter<"listing"> | string | null
  }

  export type notificationUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    update: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
    create: XOR<notificationCreateWithoutUserInput, notificationUncheckedCreateWithoutUserInput>
  }

  export type notificationUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationWhereUniqueInput
    data: XOR<notificationUpdateWithoutUserInput, notificationUncheckedUpdateWithoutUserInput>
  }

  export type notificationUpdateManyWithWhereWithoutUserInput = {
    where: notificationScalarWhereInput
    data: XOR<notificationUpdateManyMutationInput, notificationUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationScalarWhereInput = {
    AND?: notificationScalarWhereInput | notificationScalarWhereInput[]
    OR?: notificationScalarWhereInput[]
    NOT?: notificationScalarWhereInput | notificationScalarWhereInput[]
    id?: StringFilter<"notification"> | string
    user_id?: StringFilter<"notification"> | string
    type?: StringFilter<"notification"> | string
    channel?: StringFilter<"notification"> | string
    payload?: JsonFilter<"notification">
    status?: StringFilter<"notification"> | string
    created_at?: DateTimeFilter<"notification"> | Date | string
    sent_at?: DateTimeNullableFilter<"notification"> | Date | string | null
  }

  export type user_prefUpsertWithoutUserInput = {
    update: XOR<user_prefUpdateWithoutUserInput, user_prefUncheckedUpdateWithoutUserInput>
    create: XOR<user_prefCreateWithoutUserInput, user_prefUncheckedCreateWithoutUserInput>
    where?: user_prefWhereInput
  }

  export type user_prefUpdateToOneWithWhereWithoutUserInput = {
    where?: user_prefWhereInput
    data: XOR<user_prefUpdateWithoutUserInput, user_prefUncheckedUpdateWithoutUserInput>
  }

  export type user_prefUpdateWithoutUserInput = {
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_prefUncheckedUpdateWithoutUserInput = {
    notifications_on?: BoolFieldUpdateOperationsInput | boolean
    radius_meters?: IntFieldUpdateOperationsInput | number
    category_filter?: user_prefUpdatecategory_filterInput | string[]
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listingCreateWithoutCategoryInput = {
    id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimCreateNestedManyWithoutListingInput
    finder: app_userCreateNestedOneWithoutListingsInput
    photos?: listing_photoCreateNestedManyWithoutListingInput
  }

  export type listingUncheckedCreateWithoutCategoryInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimUncheckedCreateNestedManyWithoutListingInput
    photos?: listing_photoUncheckedCreateNestedManyWithoutListingInput
  }

  export type listingCreateOrConnectWithoutCategoryInput = {
    where: listingWhereUniqueInput
    create: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput>
  }

  export type listingCreateManyCategoryInputEnvelope = {
    data: listingCreateManyCategoryInput | listingCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type listingUpsertWithWhereUniqueWithoutCategoryInput = {
    where: listingWhereUniqueInput
    update: XOR<listingUpdateWithoutCategoryInput, listingUncheckedUpdateWithoutCategoryInput>
    create: XOR<listingCreateWithoutCategoryInput, listingUncheckedCreateWithoutCategoryInput>
  }

  export type listingUpdateWithWhereUniqueWithoutCategoryInput = {
    where: listingWhereUniqueInput
    data: XOR<listingUpdateWithoutCategoryInput, listingUncheckedUpdateWithoutCategoryInput>
  }

  export type listingUpdateManyWithWhereWithoutCategoryInput = {
    where: listingScalarWhereInput
    data: XOR<listingUpdateManyMutationInput, listingUncheckedUpdateManyWithoutCategoryInput>
  }

  export type app_userCreateWithoutUser_prefInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimCreateNestedManyWithoutClaimerInput
    listings?: listingCreateNestedManyWithoutFinderInput
    notifications?: notificationCreateNestedManyWithoutUserInput
  }

  export type app_userUncheckedCreateWithoutUser_prefInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutClaimerInput
    listings?: listingUncheckedCreateNestedManyWithoutFinderInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type app_userCreateOrConnectWithoutUser_prefInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutUser_prefInput, app_userUncheckedCreateWithoutUser_prefInput>
  }

  export type app_userUpsertWithoutUser_prefInput = {
    update: XOR<app_userUpdateWithoutUser_prefInput, app_userUncheckedUpdateWithoutUser_prefInput>
    create: XOR<app_userCreateWithoutUser_prefInput, app_userUncheckedCreateWithoutUser_prefInput>
    where?: app_userWhereInput
  }

  export type app_userUpdateToOneWithWhereWithoutUser_prefInput = {
    where?: app_userWhereInput
    data: XOR<app_userUpdateWithoutUser_prefInput, app_userUncheckedUpdateWithoutUser_prefInput>
  }

  export type app_userUpdateWithoutUser_prefInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutClaimerNestedInput
    listings?: listingUpdateManyWithoutFinderNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
  }

  export type app_userUncheckedUpdateWithoutUser_prefInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutClaimerNestedInput
    listings?: listingUncheckedUpdateManyWithoutFinderNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type claimCreateWithoutListingInput = {
    id: string
    status?: string
    message?: string | null
    created_at?: Date | string
    claimer: app_userCreateNestedOneWithoutClaimsInput
  }

  export type claimUncheckedCreateWithoutListingInput = {
    id: string
    claimer_user_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type claimCreateOrConnectWithoutListingInput = {
    where: claimWhereUniqueInput
    create: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput>
  }

  export type claimCreateManyListingInputEnvelope = {
    data: claimCreateManyListingInput | claimCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutListingsInput = {
    id: number
    name: string
  }

  export type categoryUncheckedCreateWithoutListingsInput = {
    id: number
    name: string
  }

  export type categoryCreateOrConnectWithoutListingsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutListingsInput, categoryUncheckedCreateWithoutListingsInput>
  }

  export type app_userCreateWithoutListingsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimCreateNestedManyWithoutClaimerInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    user_pref?: user_prefCreateNestedOneWithoutUserInput
  }

  export type app_userUncheckedCreateWithoutListingsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutClaimerInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    user_pref?: user_prefUncheckedCreateNestedOneWithoutUserInput
  }

  export type app_userCreateOrConnectWithoutListingsInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutListingsInput, app_userUncheckedCreateWithoutListingsInput>
  }

  export type listing_photoCreateWithoutListingInput = {
    id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type listing_photoUncheckedCreateWithoutListingInput = {
    id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type listing_photoCreateOrConnectWithoutListingInput = {
    where: listing_photoWhereUniqueInput
    create: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput>
  }

  export type listing_photoCreateManyListingInputEnvelope = {
    data: listing_photoCreateManyListingInput | listing_photoCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type claimUpsertWithWhereUniqueWithoutListingInput = {
    where: claimWhereUniqueInput
    update: XOR<claimUpdateWithoutListingInput, claimUncheckedUpdateWithoutListingInput>
    create: XOR<claimCreateWithoutListingInput, claimUncheckedCreateWithoutListingInput>
  }

  export type claimUpdateWithWhereUniqueWithoutListingInput = {
    where: claimWhereUniqueInput
    data: XOR<claimUpdateWithoutListingInput, claimUncheckedUpdateWithoutListingInput>
  }

  export type claimUpdateManyWithWhereWithoutListingInput = {
    where: claimScalarWhereInput
    data: XOR<claimUpdateManyMutationInput, claimUncheckedUpdateManyWithoutListingInput>
  }

  export type categoryUpsertWithoutListingsInput = {
    update: XOR<categoryUpdateWithoutListingsInput, categoryUncheckedUpdateWithoutListingsInput>
    create: XOR<categoryCreateWithoutListingsInput, categoryUncheckedCreateWithoutListingsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutListingsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutListingsInput, categoryUncheckedUpdateWithoutListingsInput>
  }

  export type categoryUpdateWithoutListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type app_userUpsertWithoutListingsInput = {
    update: XOR<app_userUpdateWithoutListingsInput, app_userUncheckedUpdateWithoutListingsInput>
    create: XOR<app_userCreateWithoutListingsInput, app_userUncheckedCreateWithoutListingsInput>
    where?: app_userWhereInput
  }

  export type app_userUpdateToOneWithWhereWithoutListingsInput = {
    where?: app_userWhereInput
    data: XOR<app_userUpdateWithoutListingsInput, app_userUncheckedUpdateWithoutListingsInput>
  }

  export type app_userUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutClaimerNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUpdateOneWithoutUserNestedInput
  }

  export type app_userUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutClaimerNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listing_photoUpsertWithWhereUniqueWithoutListingInput = {
    where: listing_photoWhereUniqueInput
    update: XOR<listing_photoUpdateWithoutListingInput, listing_photoUncheckedUpdateWithoutListingInput>
    create: XOR<listing_photoCreateWithoutListingInput, listing_photoUncheckedCreateWithoutListingInput>
  }

  export type listing_photoUpdateWithWhereUniqueWithoutListingInput = {
    where: listing_photoWhereUniqueInput
    data: XOR<listing_photoUpdateWithoutListingInput, listing_photoUncheckedUpdateWithoutListingInput>
  }

  export type listing_photoUpdateManyWithWhereWithoutListingInput = {
    where: listing_photoScalarWhereInput
    data: XOR<listing_photoUpdateManyMutationInput, listing_photoUncheckedUpdateManyWithoutListingInput>
  }

  export type listing_photoScalarWhereInput = {
    AND?: listing_photoScalarWhereInput | listing_photoScalarWhereInput[]
    OR?: listing_photoScalarWhereInput[]
    NOT?: listing_photoScalarWhereInput | listing_photoScalarWhereInput[]
    id?: StringFilter<"listing_photo"> | string
    listing_id?: StringFilter<"listing_photo"> | string
    url?: StringFilter<"listing_photo"> | string
    storage_key?: StringNullableFilter<"listing_photo"> | string | null
    sort_order?: IntFilter<"listing_photo"> | number
    uploaded_at?: DateTimeFilter<"listing_photo"> | Date | string
  }

  export type listingCreateWithoutPhotosInput = {
    id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimCreateNestedManyWithoutListingInput
    category?: categoryCreateNestedOneWithoutListingsInput
    finder: app_userCreateNestedOneWithoutListingsInput
  }

  export type listingUncheckedCreateWithoutPhotosInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    claims?: claimUncheckedCreateNestedManyWithoutListingInput
  }

  export type listingCreateOrConnectWithoutPhotosInput = {
    where: listingWhereUniqueInput
    create: XOR<listingCreateWithoutPhotosInput, listingUncheckedCreateWithoutPhotosInput>
  }

  export type listingUpsertWithoutPhotosInput = {
    update: XOR<listingUpdateWithoutPhotosInput, listingUncheckedUpdateWithoutPhotosInput>
    create: XOR<listingCreateWithoutPhotosInput, listingUncheckedCreateWithoutPhotosInput>
    where?: listingWhereInput
  }

  export type listingUpdateToOneWithWhereWithoutPhotosInput = {
    where?: listingWhereInput
    data: XOR<listingUpdateWithoutPhotosInput, listingUncheckedUpdateWithoutPhotosInput>
  }

  export type listingUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUpdateManyWithoutListingNestedInput
    category?: categoryUpdateOneWithoutListingsNestedInput
    finder?: app_userUpdateOneRequiredWithoutListingsNestedInput
  }

  export type listingUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUncheckedUpdateManyWithoutListingNestedInput
  }

  export type app_userCreateWithoutClaimsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    listings?: listingCreateNestedManyWithoutFinderInput
    notifications?: notificationCreateNestedManyWithoutUserInput
    user_pref?: user_prefCreateNestedOneWithoutUserInput
  }

  export type app_userUncheckedCreateWithoutClaimsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    listings?: listingUncheckedCreateNestedManyWithoutFinderInput
    notifications?: notificationUncheckedCreateNestedManyWithoutUserInput
    user_pref?: user_prefUncheckedCreateNestedOneWithoutUserInput
  }

  export type app_userCreateOrConnectWithoutClaimsInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutClaimsInput, app_userUncheckedCreateWithoutClaimsInput>
  }

  export type listingCreateWithoutClaimsInput = {
    id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    category?: categoryCreateNestedOneWithoutListingsInput
    finder: app_userCreateNestedOneWithoutListingsInput
    photos?: listing_photoCreateNestedManyWithoutListingInput
  }

  export type listingUncheckedCreateWithoutClaimsInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
    photos?: listing_photoUncheckedCreateNestedManyWithoutListingInput
  }

  export type listingCreateOrConnectWithoutClaimsInput = {
    where: listingWhereUniqueInput
    create: XOR<listingCreateWithoutClaimsInput, listingUncheckedCreateWithoutClaimsInput>
  }

  export type app_userUpsertWithoutClaimsInput = {
    update: XOR<app_userUpdateWithoutClaimsInput, app_userUncheckedUpdateWithoutClaimsInput>
    create: XOR<app_userCreateWithoutClaimsInput, app_userUncheckedCreateWithoutClaimsInput>
    where?: app_userWhereInput
  }

  export type app_userUpdateToOneWithWhereWithoutClaimsInput = {
    where?: app_userWhereInput
    data: XOR<app_userUpdateWithoutClaimsInput, app_userUncheckedUpdateWithoutClaimsInput>
  }

  export type app_userUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingUpdateManyWithoutFinderNestedInput
    notifications?: notificationUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUpdateOneWithoutUserNestedInput
  }

  export type app_userUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: listingUncheckedUpdateManyWithoutFinderNestedInput
    notifications?: notificationUncheckedUpdateManyWithoutUserNestedInput
    user_pref?: user_prefUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listingUpsertWithoutClaimsInput = {
    update: XOR<listingUpdateWithoutClaimsInput, listingUncheckedUpdateWithoutClaimsInput>
    create: XOR<listingCreateWithoutClaimsInput, listingUncheckedCreateWithoutClaimsInput>
    where?: listingWhereInput
  }

  export type listingUpdateToOneWithWhereWithoutClaimsInput = {
    where?: listingWhereInput
    data: XOR<listingUpdateWithoutClaimsInput, listingUncheckedUpdateWithoutClaimsInput>
  }

  export type listingUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneWithoutListingsNestedInput
    finder?: app_userUpdateOneRequiredWithoutListingsNestedInput
    photos?: listing_photoUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateWithoutClaimsInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: listing_photoUncheckedUpdateManyWithoutListingNestedInput
  }

  export type app_userCreateWithoutNotificationsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimCreateNestedManyWithoutClaimerInput
    listings?: listingCreateNestedManyWithoutFinderInput
    user_pref?: user_prefCreateNestedOneWithoutUserInput
  }

  export type app_userUncheckedCreateWithoutNotificationsInput = {
    id: string
    email?: string | null
    username?: string | null
    points?: number
    created_at?: Date | string
    updated_at?: Date | string
    claims?: claimUncheckedCreateNestedManyWithoutClaimerInput
    listings?: listingUncheckedCreateNestedManyWithoutFinderInput
    user_pref?: user_prefUncheckedCreateNestedOneWithoutUserInput
  }

  export type app_userCreateOrConnectWithoutNotificationsInput = {
    where: app_userWhereUniqueInput
    create: XOR<app_userCreateWithoutNotificationsInput, app_userUncheckedCreateWithoutNotificationsInput>
  }

  export type app_userUpsertWithoutNotificationsInput = {
    update: XOR<app_userUpdateWithoutNotificationsInput, app_userUncheckedUpdateWithoutNotificationsInput>
    create: XOR<app_userCreateWithoutNotificationsInput, app_userUncheckedCreateWithoutNotificationsInput>
    where?: app_userWhereInput
  }

  export type app_userUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: app_userWhereInput
    data: XOR<app_userUpdateWithoutNotificationsInput, app_userUncheckedUpdateWithoutNotificationsInput>
  }

  export type app_userUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUpdateManyWithoutClaimerNestedInput
    listings?: listingUpdateManyWithoutFinderNestedInput
    user_pref?: user_prefUpdateOneWithoutUserNestedInput
  }

  export type app_userUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: claimUncheckedUpdateManyWithoutClaimerNestedInput
    listings?: listingUncheckedUpdateManyWithoutFinderNestedInput
    user_pref?: user_prefUncheckedUpdateOneWithoutUserNestedInput
  }

  export type claimCreateManyClaimerInput = {
    id: string
    listing_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type listingCreateManyFinderInput = {
    id: string
    title: string
    description?: string | null
    category_id?: number | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type notificationCreateManyUserInput = {
    id: string
    type: string
    channel: string
    payload?: JsonNullValueInput | InputJsonValue
    status?: string
    created_at?: Date | string
    sent_at?: Date | string | null
  }

  export type claimUpdateWithoutClaimerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: listingUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateWithoutClaimerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyWithoutClaimerInput = {
    id?: StringFieldUpdateOperationsInput | string
    listing_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listingUpdateWithoutFinderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUpdateManyWithoutListingNestedInput
    category?: categoryUpdateOneWithoutListingsNestedInput
    photos?: listing_photoUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateWithoutFinderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUncheckedUpdateManyWithoutListingNestedInput
    photos?: listing_photoUncheckedUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateManyWithoutFinderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type notificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type listingCreateManyCategoryInput = {
    id: string
    finder_user_id: string
    title: string
    description?: string | null
    status?: string
    found_at?: Date | string
    expires_at: Date | string
    lat: number
    lng: number
    place_name?: string | null
    manual_address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    image_url?: string | null
  }

  export type listingUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUpdateManyWithoutListingNestedInput
    finder?: app_userUpdateOneRequiredWithoutListingsNestedInput
    photos?: listing_photoUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    claims?: claimUncheckedUpdateManyWithoutListingNestedInput
    photos?: listing_photoUncheckedUpdateManyWithoutListingNestedInput
  }

  export type listingUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    finder_user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    found_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    place_name?: NullableStringFieldUpdateOperationsInput | string | null
    manual_address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type claimCreateManyListingInput = {
    id: string
    claimer_user_id: string
    status?: string
    message?: string | null
    created_at?: Date | string
  }

  export type listing_photoCreateManyListingInput = {
    id: string
    url: string
    storage_key?: string | null
    sort_order?: number
    uploaded_at?: Date | string
  }

  export type claimUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    claimer?: app_userUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type claimUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type claimUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    claimer_user_id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_photoUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_photoUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type listing_photoUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    storage_key?: NullableStringFieldUpdateOperationsInput | string | null
    sort_order?: IntFieldUpdateOperationsInput | number
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
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