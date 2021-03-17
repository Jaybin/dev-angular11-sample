import { IColumns } from "./app.interfaces";

export const COMPANY_NAME = 'Buildxact';

export const APP_VERSION = '1.0.0';

export const TABLE_COLUMNS: IColumns = {
  ID: { key: 'id', label: 'ID', type: 'text' },
  TITLE: { key: 'Title', label: 'Title', type: 'text' },  
  DESCRIPTION: { key: 'Description', label: 'Description', type: 'text' },
  TYPE: { key: 'Type', label: 'Type', type: 'text' },
  DATE: { key: 'Date', label: 'Date', type: 'date' }
}

export const PLAN_TYPES = {
  HOUSE: 'house',
  BATHROOM: 'bathroom',
  KITCHEN: 'kitchen',
  SHED: 'shed',
  SITE:'site',
  BEDROOM: 'bedroom'
};

export const DOCUMENT_TYPES = {
  CONTRACT: 'contract',
  INVOICE: 'invoice',
  PROPOSAL: 'proposal'
};