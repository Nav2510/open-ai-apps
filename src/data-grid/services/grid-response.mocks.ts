import { GridAlignmentEnum } from '../enums/grid-alignment.enum';
import { GridStatusEnum } from '../enums/grid-status.enum';
import { GridTypeEnum } from '../enums/grid-type.enum';
import { GridResponse } from '../models/grid-response.model';

export const GRID_RESPONSE: GridResponse = {
  grid_columns: [
    {
      align: GridAlignmentEnum.Left,
      column_key: 'name',
      column_name: 'Name',
      type: GridTypeEnum.Name,
    },
    {
      align: GridAlignmentEnum.Right,
      column_key: 'status',
      column_name: 'Status',
      type: GridTypeEnum.Status,
    },
    {
      align: GridAlignmentEnum.Left,
      column_key: 'role',
      column_name: 'Role',
      type: GridTypeEnum.Text,
    },
    {
      align: GridAlignmentEnum.Right,
      column_key: 'progress',
      column_name: 'Progress',
      type: GridTypeEnum.Progress,
    },
    {
      align: GridAlignmentEnum.Center,
      column_key: 'teams',
      column_name: 'Teams',
      type: GridTypeEnum.Tags,
    },
  ],
  grid_data: [
    {
        "email": "john.doe@example.com",
        "id": "JD123",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "John",
            "handle": "johndoe",
            "last_name": "Doe"
        },
        "role": "Admin",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team A"},
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team B"}
        ]
    },
    {
        "email": "jane.smith@example.com",
        "id": "JS456",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Jane",
            "handle": "janesmith",
            "last_name": "Smith"
        },
        "role": "Client",
        "status": GridStatusEnum.Churned,
        "teams": [
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team X"}
        ]
    },
    {
        "email": "bob.jones@example.com",
        "id": "BJ789",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Bob",
            "handle": "bobjones",
            "last_name": "Jones"
        },
        "role": "Admin",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team Z"},
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team Y"}
        ]
    },
    {
        "email": "alice.doe@example.com",
        "id": "AD101",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Alice",
            "handle": "alicedoe",
            "last_name": "Doe"
        },
        "role": "Client",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team K"}
        ]
    },
    {
        "email": "tom.white@example.com",
        "id": "TW202",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Tom",
            "handle": "tomwhite",
            "last_name": "White"
        },
        "role": "Admin",
        "status": GridStatusEnum.Churned,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team P"},
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team Q"}
        ]
    },
    {
        "email": "emily.johnson@example.com",
        "id": "EJ303",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Emily",
            "handle": "emilyjohnson",
            "last_name": "Johnson"
        },
        "role": "HR",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team M"}
        ]
    },
    {
        "email": "michael.brown@example.com",
        "id": "MB404",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Michael",
            "handle": "michaelbrown",
            "last_name": "Brown"
        },
        "role": "HR",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team S"},
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team T"}
        ]
    },
    {
        "email": "susan.wilson@example.com",
        "id": "SW505",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Susan",
            "handle": "susanwilson",
            "last_name": "Wilson"
        },
        "role": "Admin",
        "status": GridStatusEnum.Churned,
        "teams": [
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team U"},
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team V"}
        ]
    },
    {
        "email": "david.miller@example.com",
        "id": "DM606",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "David",
            "handle": "davidmiller",
            "last_name": "Miller"
        },
        "role": "Client",
        "status": GridStatusEnum.Customer,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team W"}
        ]
    },
    {
        "email": "lisa.anderson@example.com",
        "id": "LA707",
        "license_used": Math.floor(Math.random()*100),
        "name": {
            "first_name": "Lisa",
            "handle": "lisaanderson",
            "last_name": "Anderson"
        },
        "role": "Customer",
        "status": GridStatusEnum.Churned,
        "teams": [
            {"background_color": "#fffbdf", "text_color": "#806900", "value": "Team Y"},
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team Z"},
            {"background_color": "#ffe4e4", "text_color": "#FF8989", "value": "Team X"}
        ]
    }
]
};
