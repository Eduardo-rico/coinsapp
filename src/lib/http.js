//el wrapper del fetch

class Http {
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http get method error');
      throw error;
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http POST method error');
      throw error;
    }
  };

  put = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'PUT',
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http PUT method error');
      throw error;
    }
  };

  delete = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'DELETE',
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('http DELETE method error');
      throw error;
    }
  };
}

export default Http;
