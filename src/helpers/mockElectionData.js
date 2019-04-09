export const mockElectionData = [
  {
    'district-divisions': [
      {
        'ocd-id': 'ocd-division/country:us/state:ma/place:rochester',
        'voter-registration-authority-level': 'municipal',
        'election-authority-level': 'municipal',
        'voting-methods': [
          {
            primary: false,
            type: 'early-voting',
            'excuse-required': false
          },
          {
            primary: true,
            instructions: {
              'voting-id':
                "You may be asked to show identification if: you are voting for the first-time in Massachusetts, you are an inactive voter, you are casting a provisional or challenged ballot, or if the poll worker has a reasonable suspicion that leads them to request identification. Acceptable forms include (must show your name and address): a MA driver's license or MA-issued ID card; recent utility bill; rent receipt; signed lease; a copy of a voter registration affidavit; or any other printed identification which contains the voter's name and address.\n\nVoters without ID: If you're a first-time voter who is unable to present ID when you check in, you may vote a provisional ballot and return with acceptable ID by close of polls. If you're asked for ID for any other reason, and are not able to present ID in such a situation, you must still be permitted to vote; however, your ballot must be challenged. Your ballot will be cast normally, and will only be re-examined in the case of a recount, court order, or audit."
            },
            type: 'in-person',
            'excuse-required': false
          },
          {
            primary: false,
            type: 'by-mail',
            'excuse-required': true,
            'ballot-request-deadline-received': '2019-04-09T00:00:00Z',
            'acceptable-forms': [
              {
                name: 'ma_absentee'
              }
            ]
          }
        ],
        'voter-registration-methods': [
          {
            instructions: {
              registration:
                "You should know: you need a Massachusetts ID to use Massachusetts's online voter registration system. If you don't have a Massachusetts-issued ID, you can still register to vote by mail."
            },
            type: 'online',
            'supports-iframe': true,
            'deadline-online': '2019-03-21T00:00:00Z',
            url:
              'https://www.sec.state.ma.us/OVR/Pages/MinRequirements.aspx?RMVId=True'
          },
          {
            'deadline-postmarked': '2019-03-21T00:00:00Z',
            instructions: {
              signature:
                'To register in Massachusetts you must: \nbe a citizen of the United States \nbe a resident of Massachusetts \nbe 18 years old on or before the next election \nnot have been convicted of corrupt practices in respect to elections \nnot be under guardianship with respect to voting \nnot be currently incarcerated for a felony conviction',
              idnumber:
                'Federal law requires that you provide your driver\'s license number to register to vote. If you do not have a current and valid Massachusetts driver\'s license, you must provide the last four digits of your Social Security number. If you have neither, you must write "NONE" in the box.'
            },
            type: 'by-mail',
            'acceptable-forms': [
              {
                name: 'nvrf'
              }
            ]
          }
        ]
      }
    ],
    website: 'https://www.townofrochestermass.com/townclerk.html',
    'polling-place-url':
      'https://www.sec.state.ma.us/wheredoivotema//bal/myelectioninfo.aspx',
    date: '2019-04-10T00:00:00Z',
    population: 5575,
    'polling-place-url-shortened': 'https://tvote.org/2v2xAee',
    description: 'Rochester Town Election',
    id: '5c5c6acf-4a72-49be-a122-ec9cb673a4ab'
  }
];
