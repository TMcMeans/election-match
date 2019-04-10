//ADD ASYNC TESTS HERE
import * as API from './apicalls';
import {mockElectionData } from './mockElectionData'

describe('API', () => {
  it('fetchElections should call fetch', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(mockElectionData);
        },
        ok: true
      });
    });

    await API.fetchElections();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('fetchElections should return an election object if response is ok', () => {});

  it('fetchElections should error out if response is not ok', () => {});


  it('postAddress should call fetch with an ocd_id', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(202);
        },
        ok: true
      });
    });

    const expected = 'https://a-fake-ocd_id.com'
    await API.postAddress('https://a-fake-ocd_id.com');
    expect(window.fetch).toHaveBeenCalledWith(expected);

  });
  it('postAddress should return a status code if response is ok', () => {});

  it('postAddress should error out if response is not ok', () => {});
});
