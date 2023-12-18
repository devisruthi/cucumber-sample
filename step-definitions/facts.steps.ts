// test/step-definitions/facts.steps.ts
import { binding, given, then } from 'cucumber-tsflow';
import { assert } from 'chai';
import supertest from 'supertest';

@binding()
export class FactsSteps {
  private response: supertest.Response;

  @given(/I make a GET request to (.*)/)
  public async makeGetRequest(url: string) {

    this.response = await supertest("https://cat-fact.herokuapp.com/").get(url)
  }

  @then(/I should get a response with status code (\d+)/)
  public verifyStatusCode(expected: number) {
    assert.equal(this.response.status, expected);
  }


  @then(/I should get an array of facts/)
  public verifyFactsArray() {
    assert.isArray(this.response.body);
  }

  @then(/each fact should have a type of "(.*)"/)
  public verifyFactType(expected: string) {
    for (const fact of this.response.body) {
      assert.equal(fact.type, expected);
    }
  }

  @then(/each fact should have a source of "(.*)"/)
  public verifyFactSource(expected: string) {
    for (const fact of this.response.body) {
      assert.equal(fact.source, expected);
    }
  }
}
