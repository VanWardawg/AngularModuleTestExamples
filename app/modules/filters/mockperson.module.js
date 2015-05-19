'use strict';
angular.module('mockedPersonJSON',[])
.value('peopleCandidates',[
	{
		firstName:'Kevin',
		lastName:'Hinton',
		candidateInfo:{
			dateApplied:'09-Dec-2014'
		},
		ldsAccountId:'3461256691858966',
		spouse:{
			value:'Taylor Hinton'
		}
	},{
		firstName:'Matt',
		lastName:'Edwards',
		candidateInfo:{
		},
		ldsAccountId:'3461256691858966',
		spouse:{
			value:'someone'
		}
	},{
		firstName:'Sam',
		lastName:'Duzett',
		ldsAccountId:'3461256691858966',
		spouse:{}
	}
]).value('peopleWives',[
{
	firstName:'Taylor',
	lastName:'Hinton',
	ldsAccountId:'3461256691858964',
	spouse:{
		value:'Kevin Hinton'
	},
	spouseName:'Kevin Hinton',
	callings: [
		{
			current: true,
			callingName: ''
		},{
			current: false,
			callingName: null
		}
	],
	missions: [
		{
			name: 'Uruguay Montevideo Mission',
			startDate: '03-SEP-2009',
			endDate: null
		}
	],
	candidateInfo: {
		dateApplied: '12-Aug-14'
	}
},{
	firstName:'Jennifer',
	lastName:'Aniston',
	ldsAccountId:'3461256691858963',
	spouse:{
		key:'1234',
		value:'Matt Edwards'
	}
},{
	firstName:'Samantha',
	lastName:'Duzett',
	ldsAccountId:'3461256451858966',
	spouse:{}
}
]).value('peopleLeaders',[
	{
		ldsAccountId:'3461256691858966',
		firstName:'Kevin',
		lastName:'Hinton',
		languages:[{
			code:'eng',
			name:'English'
		}],
		gender:'M',
		spouse:{
			value:'Taylor Hinton'
		},
		tenure:'1 year 2 months 5 days',
		estimatedTenureDate:'12/JUN/13',
		currentPosition:{
			unitType:{
				key:'1',
				value:'MTC Presidency'
			},
			startDate:'5-Mar-2014',
			endDate:'5-jan-2015',
			unit:{
				key:'9',
				value:'9'
			},
			positionType: {
				key: 'aaae6006-ddb3-4577-9d89-3f64e2aaa6d8',
				value: 'President'
			},
			positionInfos: [
				{
					presentedDate: true,
					setApartDate: true
				}
			]
		},
		positions: [
			{
				presentedDate: true,
				setApartDate: true,
				positionType: {
					value: 'd'
				},
				unitType: {
					value: 'r'
				},
				unit:{
					value: '6'
				},
				positionInfos: [{}]
			},
			{
				presentedDate: true,
				setApartDate: true,
				positionType: {
					value: 'd'
				},
				unitType: {
					value: 'r'
				},
				unit:{},
				positionInfos: [{}]
			}
		],
		callings: [
			{
				current: true,
				callingName: 'Ward Website Administrator'
			},{
				current: false,
				callingName: 'Primary Teacher, Assistant Stake Clerk'
			}
		],
		candidateInfo:{
			previousCallings:[{
				startDate:'27-Jun-2012',
				endDate:'7-May-2013'
			},{
				startDate:'7-May-2013',
				endDate:'27-Jul-2013'
			},{
				startDate:'27-Jul-2013',
				endDate:'18-Oct-2013'
			},{
				startDate:'18-Oct-2013',
				endDate:'5-Mar-2014'
			}]
		}
	},{
		ldsAccountId:'3498346944997250',
		firstName:'Matt',
		lastName:'Edwards',
		languages:[{
			code:'eng',
			name:'English'
		},{
			name:'Cebuano'
		}],
		spouse:{
			value:'someone'
		},
		spouseName:'Jennifer',
		estimatedTenureDate:'14/JUN/13',
		tenure:'2 months 5 days',
		currentPosition:{
			unitType:{
				key:'1',
				value:'District Presidency'
			},
			startDate:'16-Jul-2014',
			endDate:'5-Jan-2015',
			unit:{
				key:'A',
				value:'A'
			},
			positionType: {
				value: '1st Counselor'
			}
		},
		candidateInfo:{
			previousCallings:[{
				startDate:'6-Jul-2011',
				endDate:'19-Apr-2012'
			},{
				startDate:'19-Apr-2012',
				endDate:'16-Oct-2012'
			},{
				startDate:'16-Oct-2012',
				endDate:'30-Sep-2013'
			},{
				startDate:'30-Sep-2013',
				endDate:'16-Jul-2014'
			}]
		},
		positions: [
			{}
		]
	},{
		ldsAccountId:'3461256691858966',
		firstName:'Sam',
		lastName:'Duzett',
		languages:[{
			code:'eng',
			name:'English'
		},{
			name:'Spanish'
		}],
		spouse:{
			key:'3461256451858966',
			value:'Samantha Duzett'
		},
		spouseName:'Samantha Duzett',
		estimatedTenureDate:'12/JUN/13',
		currentPosition:{
			unitType:{
				key:'1',
				value:'District Presidency'
			},
			startDate:'3-Nov-2014',
			endDate:'5-Jan-2015',
			unit:{
				key:'A',
				value:'A'
			},
			positionType: {
				value: '2nd Counselor'
			}
		},
		tenure:'1 month 5 days',
		candidateInfo:{
			previousCallings:[{
				startDate:'25-Jan-2012',
				endDate:'26-Nov-2012'
			},{
				startDate:'26-Nov-2012',
				endDate:'7-Mar-2013'
			},{
				startDate:'7-Mar-2013',
				endDate:'11-Oct-2014'
			},{
				startDate:'11-Oct-2014',
				endDate:'3-Nov-2014'
			}]
		}
	},{
		active: true,
		address1: '345 E. 300 N.',
		address2: 'Apt. 24',
		approvalInfo: {
			approved: true,
			calledBy: 'ME',
			calledDate: '11-DEC-2014',
			clearanceDate: '11-DEC-2014',
			setApartBy: 'ME',
			setApartDate: '11-DEC-2014'
		},
		birthDate: '20-Jul-1990',
		byuId: '462048959',
		callings: [
			{
				current: true,
				callingName: 'Ward Website Administrator'
			},{
				current: false,
				callingName: 'Primary Teacher, Assistant Stake Clerk'
			}
		],
		candidateInfo: {
			dateApplied: '10-Dec-2014',
			draft: false,
			previousCallings: [],
			stake: {},
			ward: {
				key: '9989',
				value: 'Provo Married Student 32nd',
			}
		},
		city: 'Provo',
		country: 'USA',
		currentPosition: {
			id: 'ec4f305a-f06e-4c71-b9a8-4d5a56ef6a33',
			ldsAccountId: '3627144576320744',
			mtcId: '12352',
			positionType: {
				key: 'aaae6006-ddb3-4577-9d89-3f64e2aaa6d8',
				value: 'President',
				startDate: '23-JAN-2015'
			},
			unit: {
				key: '114',
				value: '114'
			},
			unitType: {
				key: 'ede22547-7beb-423f-a033-de5591cdd2fb',
				value: 'Branch Presidency'
			}
		},
		email: 'wardawg6612@gmail.com',
		employer: 'Brigham Young University',
		firstName: 'Jim',
		gender: 'M',
		languages: [
			{
				code: 'eng',
				name: 'English',
				ability: 1
			},{
				ability: 2,
				code: 'spa',
				name: 'Spanish'
			},{
				ability: 3,
				code: 'por',
				name: 'Portuguese'
			}
		],
		lastName: 'Bob',
		ldsAccountId: '3627144576320744',
		leave: [],
		missions: [
			{
				name: 'Uruguay Montevideo Mission',
				startDate: '03-SEP-2009',
				endDate: '03-SEP-2011'
			}
		],
		mtcId: '12352',
		occupation: 'Senior Student Programmer',
		phoneCell: '4802614333',
		phoneHome: '4802614333',
		physicalLimitations: 'NONE',
		estimatedTenureDate:'14/MAY/13',
		postalCode: '84606',
		tenure:'5 days',
		positions:[
			{
				'ldsAccountId':'3627144576320744',
				'id':'ec4f305a-f06e-4c71-b9a8-4d5a56ef6a33',
				'startDate':'23-JAN-2015',
				'mtcId':'12352',
				'unitType':{
					'key':'ede22547-7beb-423f-a033-de5591cdd2fb',
					'value':'Branch Presidency'
				},
				'unit':{
					'key':'114',
					'value':'114'
				},
				'positionType':{
					'key':'aaae6006-ddb3-4577-9d89-3f64e2aaa6d8',
					'value':'President'
				}
			},{
				'ldsAccountId':'3627144576320744',
				'id':'f44a3caa-4f76-43f4-861f-7069ff6f05e9',
				'startDate':'22-JAN-2015',
				'endDate':'23-JAN-2015',
				'mtcId':'12352',
				'unitType':{
					'key':'63143fc3-4f92-4974-9c26-03b591be08bb',
					'value':'District Presidency'
				},
				'unit':{
					'key':'A',
					'value':'A'
				},
				'positionType':{
					'key':'aaae6006-ddb3-4577-9d89-3f64e2aaa6d8',
					'value':'President'
				}
			},{
				'ldsAccountId':'3627144576320744',
				'id':'3',
				'startDate':'09-JAN-2015',
				'endDate':'22-JAN-2015',
				'mtcId':'1',
				'unitType':{
					'key':'1e68fbfd-fc6e-44ce-ab04-adba2d1e5333',
					'value':'MTC Presidency'
				},
				'unit':{
					'key':'9-D',
					'value':'9-D'
				},
				'positionType':{
					'key':'7eb63385-1091-4bf1-967f-49f6e8bebdd4',
					'value':'1st Counselor'
				}
			},{
				'ldsAccountId':'3627144576320744',
				'id':'1',
				'startDate':'09-JAN-2014',
				'endDate':'09-JAN-2015',
				'mtcId':'1',
				'unitType':{
					'key':'1e68fbfd-fc6e-44ce-ab04-adba2d1e5333',
					'value':'MTC Presidency'
				},
				'unit':{
					'key':'9-C',
					'value':'9-C'
				},
				'positionType':{
					'key':'aaae6006-ddb3-4577-9d89-3f64e2aaa6d8',
					'value':'President'
				}
			},{
				'ldsAccountId':'3627144576320744',
				'id':'2',
				'startDate':'12-JAN-2012',
				'endDate':'09-JAN-2014',
				'mtcId':'1',
				'unitType':{
					'key':'1e68fbfd-fc6e-44ce-ab04-adba2d1e5333',
					'value':'MTC Presidency'
				},
				'unit':{
					'key':'9-C',
					'value':'9-C'
				},
				'positionType':{
					'key':'9395896b-5f22-4fbb-8725-aa9360892f3b',
					'value':'Executive Secretary'
				}
			}
		],
		spouse: {},
		spouseName: 'wife',
		state: 'Utah',
		workLocation: 'MTC'
		}
]).value('signupPerson',{
	active: true,
	address1: '123 E. No one cares',
	address2: '',
	birthDate: '20-Jul-1990',
	byuId: '462048959',
	callings: [{
		callingName: 'king fairy',
		current: true
	}],
	candidateInfo: {
		childrenAges: '1,2,3',
		clearanceDate: '22-JAN-2015',
		dateApplied: '07-Jan-2015',
		draft: false,
		numberOfChildren: '3',
		previousCallings: [],
		ward: {key:'9989'},
		stake:{key:'132'}
	},
	city: 'Whoville',
	country: '',
	email: 'klhinton66@msn.com',
	employer: 'mr. fairy',
	firstName: 'Kevin',
	gender: 'M',
	languages: [{
		code: 'ale',
		name: 'Aleut'
	},{
		code: 'eng',
		name: 'English'
	}],
	lastName: 'Hinton',
	ldsAccountId: '3474622200887276',
	missions: [{
		endDate: '22-JAN-2015',
		name: 'Fairyland',
		startDate: '06-JAN-2015'
	}],
	mtcId: '0',
	occupation: 'fairy',
	phoneCell: '4802614333',
	phoneHome: '4802614333',
	phoneOffice: '',
	physicalLimitations: '',
	postalCode: '123456789',
	spouseName: 'mrs. fairy',
	state: 'NeverLand',
	tenure: '5 days',
	workLocation: 'the workshop',
});
