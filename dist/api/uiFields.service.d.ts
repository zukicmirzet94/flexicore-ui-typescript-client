import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PresetToRole } from '../model/presetToRole';
import { PresetToTenant } from '../model/presetToTenant';
import { PresetToUser } from '../model/presetToUser';
import { UiField } from '../model/uiField';
import { Configuration } from '../configuration';
import { UiFieldFiltering } from '../model/uiFieldFiltering';
import { PresetToTenantFilter } from '../model/presetToTenantFilter';
import { PaginationResponse } from '@flexicore/flexicore-client';
import { PresetToUserFilter } from '../model/presetToUserFilter';
import { PresetToRoleFilter } from '../model/presetToRoleFilter';
import { PresetToRoleCreate, PresetToTenantCreate, PresetToUserCreate, PresetToRoleUpdate, PresetToTenantUpdate, PresetToUserUpdate, PresetToRoleContainer, PresetToTenantContainer, PresetToUserContainer, Preset, PreferedPresetRequest } from '../model/models';
export declare class UiFieldsService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    defaultDeleteHeaders: Headers;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    private canConsumeForm;
    linkPresetToRole(body?: PresetToRoleCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToRole>;
    linkPresetToRole(body?: PresetToRoleCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToRole>>;
    linkPresetToRole(body?: PresetToRoleCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToRole>>;
    getPreferredPresets(body?: PreferedPresetRequest, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Preset>>;
    getPreferredPresets(body?: PreferedPresetRequest, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Preset>>>;
    getPreferredPresets(body?: PreferedPresetRequest, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Preset>>>;
    getAllPresetToRole(body?: PresetToRoleFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<PresetToRoleContainer>>;
    getAllPresetToRole(body?: PresetToRoleFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<PresetToRoleContainer>>>;
    getAllPresetToRole(body?: PresetToRoleFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<PresetToRoleContainer>>>;
    getAllPresetToTenant(body?: PresetToTenantFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<PresetToTenantContainer>>;
    getAllPresetToTenant(body?: PresetToTenantFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<PresetToTenantContainer>>>;
    getAllPresetToTenant(body?: PresetToTenantFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<PresetToTenantContainer>>>;
    getAllPresetToUser(body?: PresetToUserFilter, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<PresetToUserContainer>>;
    getAllPresetToUser(body?: PresetToUserFilter, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<PresetToUserContainer>>>;
    getAllPresetToUser(body?: PresetToUserFilter, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<PresetToUserContainer>>>;
    linkPresetToTenant(body?: PresetToTenantCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToTenant>;
    linkPresetToTenant(body?: PresetToTenantCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToTenant>>;
    linkPresetToTenant(body?: PresetToTenantCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToTenant>>;
    linkPresetToUser(body?: PresetToUserCreate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToUser>;
    linkPresetToUser(body?: PresetToUserCreate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToUser>>;
    linkPresetToUser(body?: PresetToUserCreate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToUser>>;
    listAllUiFields(body?: UiFieldFiltering, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<UiField>>;
    listAllUiFields(body?: UiFieldFiltering, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<UiField>>>;
    listAllUiFields(body?: UiFieldFiltering, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<UiField>>>;
    updatePresetToRole(body?: PresetToRoleUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToRole>;
    updatePresetToRole(body?: PresetToRoleUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToRole>>;
    updatePresetToRole(body?: PresetToRoleUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToRole>>;
    updatePresetToTenant(body?: PresetToTenantUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToTenant>;
    updatePresetToTenant(body?: PresetToTenantUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToTenant>>;
    updatePresetToTenant(body?: PresetToTenantUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToTenant>>;
    updatePresetToUser(body?: PresetToUserUpdate, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToUser>;
    updatePresetToUser(body?: PresetToUserUpdate, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToUser>>;
    updatePresetToUser(body?: PresetToUserUpdate, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToUser>>;
    softDelete(id?: string, authenticationKey?: string, observe?: 'body', reportProgress?: boolean): Observable<PresetToUser>;
    softDelete(id?: string, authenticationKey?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PresetToUser>>;
    softDelete(id?: string, authenticationKey?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PresetToUser>>;
}
