import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
import { QueryParamsResponse } from "../types/cardchain/cardchain/query";
import { QueryCardResponse } from "../types/cardchain/cardchain/query";
import { QueryUserResponse } from "../types/cardchain/cardchain/query";
import { QueryCardsResponse } from "../types/cardchain/cardchain/query";
import { QueryMatchResponse } from "../types/cardchain/cardchain/query";
import { QuerySetResponse } from "../types/cardchain/cardchain/query";
import { QuerySellOfferResponse } from "../types/cardchain/cardchain/query";
import { QueryCouncilResponse } from "../types/cardchain/cardchain/query";
import { QueryServerResponse } from "../types/cardchain/cardchain/query";
import { QueryEncounterResponse } from "../types/cardchain/cardchain/query";
import { QueryEncountersResponse } from "../types/cardchain/cardchain/query";
import { QueryEncounterWithImageResponse } from "../types/cardchain/cardchain/query";
import { QueryEncountersWithImageResponse } from "../types/cardchain/cardchain/query";
import { QueryCardchainInfoResponse } from "../types/cardchain/cardchain/query";
import { QuerySetRarityDistributionResponse } from "../types/cardchain/cardchain/query";
import { QueryAccountFromZealyResponse } from "../types/cardchain/cardchain/query";
import { QueryVotingResultsResponse } from "../types/cardchain/cardchain/query";
import { QueryMatchesResponse } from "../types/cardchain/cardchain/query";
import { QuerySetsResponse } from "../types/cardchain/cardchain/query";
import { QueryCardContentResponse } from "../types/cardchain/cardchain/query";
import { QueryCardContentsResponse } from "../types/cardchain/cardchain/query";
import { QuerySellOffersResponse } from "../types/cardchain/cardchain/query";

import { QueryParamsRequest } from "../types/cardchain/cardchain/query";
import { QueryCardRequest } from "../types/cardchain/cardchain/query";
import { QueryUserRequest } from "../types/cardchain/cardchain/query";
import { QueryCardsRequest } from "../types/cardchain/cardchain/query";
import { QueryMatchRequest } from "../types/cardchain/cardchain/query";
import { QuerySetRequest } from "../types/cardchain/cardchain/query";
import { QuerySellOfferRequest } from "../types/cardchain/cardchain/query";
import { QueryCouncilRequest } from "../types/cardchain/cardchain/query";
import { QueryServerRequest } from "../types/cardchain/cardchain/query";
import { QueryEncounterRequest } from "../types/cardchain/cardchain/query";
import { QueryEncountersRequest } from "../types/cardchain/cardchain/query";
import { QueryEncounterWithImageRequest } from "../types/cardchain/cardchain/query";
import { QueryEncountersWithImageRequest } from "../types/cardchain/cardchain/query";
import { QueryCardchainInfoRequest } from "../types/cardchain/cardchain/query";
import { QuerySetRarityDistributionRequest } from "../types/cardchain/cardchain/query";
import { QueryAccountFromZealyRequest } from "../types/cardchain/cardchain/query";
import { QueryVotingResultsRequest } from "../types/cardchain/cardchain/query";
import { QueryMatchesRequest } from "../types/cardchain/cardchain/query";
import { QuerySetsRequest } from "../types/cardchain/cardchain/query";
import { QueryCardContentRequest } from "../types/cardchain/cardchain/query";
import { QueryCardContentsRequest } from "../types/cardchain/cardchain/query";
import { QuerySellOffersRequest } from "../types/cardchain/cardchain/query";


import type {SnakeCasedPropertiesDeep} from 'type-fest';

export type QueryParamsType = Record<string | number, any>;

export type FlattenObject<TValue> = CollapseEntries<CreateObjectEntries<TValue, TValue>>;

type Entry = { key: string; value: unknown };
type EmptyEntry<TValue> = { key: ''; value: TValue };
type ExcludedTypes = Date | Set<unknown> | Map<unknown, unknown>;
type ArrayEncoder = `[${bigint}]`;

type EscapeArrayKey<TKey extends string> = TKey extends `${infer TKeyBefore}.${ArrayEncoder}${infer TKeyAfter}`
  ? EscapeArrayKey<`${TKeyBefore}${ArrayEncoder}${TKeyAfter}`>
  : TKey;

// Transforms entries to one flattened type
type CollapseEntries<TEntry extends Entry> = {
  [E in TEntry as EscapeArrayKey<E['key']>]: E['value'];
};

// Transforms array type to object
type CreateArrayEntry<TValue, TValueInitial> = OmitItself<
  TValue extends unknown[] ? { [k: ArrayEncoder]: TValue[number] } : TValue,
  TValueInitial
>;

// Omit the type that references itself
type OmitItself<TValue, TValueInitial> = TValue extends TValueInitial
  ? EmptyEntry<TValue>
  : OmitExcludedTypes<TValue, TValueInitial>;

// Omit the type that is listed in ExcludedTypes union
type OmitExcludedTypes<TValue, TValueInitial> = TValue extends ExcludedTypes
  ? EmptyEntry<TValue>
  : CreateObjectEntries<TValue, TValueInitial>;

type CreateObjectEntries<TValue, TValueInitial> = TValue extends object
  ? {
      // Checks that Key is of type string
      [TKey in keyof TValue]-?: TKey extends string
        ? // Nested key can be an object, run recursively to the bottom
          CreateArrayEntry<TValue[TKey], TValueInitial> extends infer TNestedValue
          ? TNestedValue extends Entry
            ? TNestedValue['key'] extends ''
              ? {
                  key: TKey;
                  value: TNestedValue['value'];
                }
              :
                  | {
                      key: `${TKey}.${TNestedValue['key']}`;
                      value: TNestedValue['value'];
                    }
                  | {
                      key: TKey;
                      value: TValue[TKey];
                    }
            : never
          : never
        : never;
    }[keyof TValue] // Builds entry for each key
  : EmptyEntry<TValue>;

export type ChangeProtoToJSPrimitives<T extends object> = {
  [key in keyof T]: T[key] extends Uint8Array | Date ? string :  T[key] extends object ? ChangeProtoToJSPrimitives<T[key]>: T[key];
  // ^^^^ This line is used to convert Uint8Array to string, if you want to keep Uint8Array as is, you can remove this line
}

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers ),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    } as AxiosRequestConfig;
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title cardchain.cardchain
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * QueryParams
   *
   * @tags Query
   * @name queryParams
   * @request GET:/DecentralCardGame/cardchain/cardchain/params
   */
  queryParams = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryParamsResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/params`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCard
   *
   * @tags Query
   * @name queryCard
   * @request GET:/DecentralCardGame/cardchain/cardchain/card/{cardId}
   */
  queryCard = (cardId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/card/${cardId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryUser
   *
   * @tags Query
   * @name queryUser
   * @request GET:/DecentralCardGame/cardchain/cardchain/user/{address}
   */
  queryUser = (address: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryUserResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/user/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCards
   *
   * @tags Query
   * @name queryCards
   * @request GET:/DecentralCardGame/cardchain/cardchain/cards
   */
  queryCards = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardsRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardsResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/cards`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMatch
   *
   * @tags Query
   * @name queryMatch
   * @request GET:/DecentralCardGame/cardchain/cardchain/match/{matchId}
   */
  queryMatch = (matchId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryMatchResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/match/${matchId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySet
   *
   * @tags Query
   * @name querySet
   * @request GET:/DecentralCardGame/cardchain/cardchain/set/{setId}
   */
  querySet = (setId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySetResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/set/${setId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySellOffer
   *
   * @tags Query
   * @name querySellOffer
   * @request GET:/DecentralCardGame/cardchain/cardchain/sell_offer/{sellOfferId}
   */
  querySellOffer = (sellOfferId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySellOfferResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/sell_offer/${sellOfferId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCouncil
   *
   * @tags Query
   * @name queryCouncil
   * @request GET:/DecentralCardGame/cardchain/cardchain/council/{councilId}
   */
  queryCouncil = (councilId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCouncilResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/council/${councilId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryServer
   *
   * @tags Query
   * @name queryServer
   * @request GET:/DecentralCardGame/cardchain/cardchain/server/{serverId}
   */
  queryServer = (serverId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryServerResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/server/${serverId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEncounter
   *
   * @tags Query
   * @name queryEncounter
   * @request GET:/DecentralCardGame/cardchain/cardchain/encounter/{encounterId}
   */
  queryEncounter = (encounterId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncounterResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/encounter/${encounterId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEncounters
   *
   * @tags Query
   * @name queryEncounters
   * @request GET:/DecentralCardGame/cardchain/cardchain/encounters
   */
  queryEncounters = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncountersRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncountersResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/encounters`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEncounterWithImage
   *
   * @tags Query
   * @name queryEncounterWithImage
   * @request GET:/DecentralCardGame/cardchain/cardchain/encounter_with_image/{encounterId}
   */
  queryEncounterWithImage = (encounterId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncounterWithImageResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/encounter_with_image/${encounterId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryEncountersWithImage
   *
   * @tags Query
   * @name queryEncountersWithImage
   * @request GET:/DecentralCardGame/cardchain/cardchain/encounters_with_image
   */
  queryEncountersWithImage = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncountersWithImageRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryEncountersWithImageResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/encounters_with_image`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCardchainInfo
   *
   * @tags Query
   * @name queryCardchainInfo
   * @request GET:/DecentralCardGame/cardchain/cardchain/cardchain_info
   */
  queryCardchainInfo = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardchainInfoResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/cardchain_info`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySetRarityDistribution
   *
   * @tags Query
   * @name querySetRarityDistribution
   * @request GET:/DecentralCardGame/cardchain/cardchain/set_rarity_distribution/{setId}
   */
  querySetRarityDistribution = (setId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySetRarityDistributionResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/set_rarity_distribution/${setId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryAccountFromZealy
   *
   * @tags Query
   * @name queryAccountFromZealy
   * @request GET:/DecentralCardGame/cardchain/cardchain/account_from_zealy/{zealyId}
   */
  queryAccountFromZealy = (zealyId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryAccountFromZealyResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/account_from_zealy/${zealyId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryVotingResults
   *
   * @tags Query
   * @name queryVotingResults
   * @request GET:/DecentralCardGame/cardchain/cardchain/voting_results
   */
  queryVotingResults = (
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryVotingResultsResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/voting_results`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryMatches
   *
   * @tags Query
   * @name queryMatches
   * @request GET:/DecentralCardGame/cardchain/cardchain/matches
   */
  queryMatches = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryMatchesRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryMatchesResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/matches`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySets
   *
   * @tags Query
   * @name querySets
   * @request GET:/DecentralCardGame/cardchain/cardchain/sets/{status}
   */
  querySets = (status: string,
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySetsRequest>>>,"status">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySetsResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/sets/${status}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCardContent
   *
   * @tags Query
   * @name queryCardContent
   * @request GET:/DecentralCardGame/cardchain/cardchain/card_content/{cardId}
   */
  queryCardContent = (cardId: string,
    query?: Record<string, any>,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardContentResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/card_content/${cardId}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QueryCardContents
   *
   * @tags Query
   * @name queryCardContents
   * @request GET:/DecentralCardGame/cardchain/cardchain/card_contents
   */
  queryCardContents = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardContentsRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QueryCardContentsResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/card_contents`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
  /**
   * QuerySellOffers
   *
   * @tags Query
   * @name querySellOffers
   * @request GET:/DecentralCardGame/cardchain/cardchain/sell_offers
   */
  querySellOffers = (
    query?: Omit<FlattenObject<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySellOffersRequest>>>,"">,
    params: RequestParams = {},
  ) =>
    this.request<SnakeCasedPropertiesDeep<ChangeProtoToJSPrimitives<QuerySellOffersResponse>>>({
      path: `/DecentralCardGame/cardchain/cardchain/sell_offers`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  
}