class WebsimSocket {
  constructor(url) {
    this.url = url;
    this.ws = new WebSocket(url);

    // Event placeholders (your code can assign handlers)
    this.onopen = null;
    this.onmessage = null;
    this.onclose = null;
    this.onerror = null;

    // Wire WebSocket events to this class
    this.ws.onopen = (event) => {
      if (this.onopen) this.onopen(event);
    };

    this.ws.onmessage = (event) => {
      if (this.onmessage) this.onmessage(event);
    };

    this.ws.onclose = (event) => {
      if (this.onclose) this.onclose(event);
    };

    this.ws.onerror = (event) => {
      if (this.onerror) this.onerror(event);
    };
  }

  send(data) {
    this.ws.send(data);
  }

  close() {
    this.ws.close();
  }
}
