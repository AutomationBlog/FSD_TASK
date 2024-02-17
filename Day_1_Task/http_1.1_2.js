/* 

HTTP 1.1
1. It works on the textual format.
2. There is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources.
3. It uses requests resource Inlining for use getting multiple pages
4. It compresses data by itself.

HTTP 2
1. It works on the binary protocol.
2. It allows multiplexing so one TCP connection is required for multiple requests.
3. It uses PUSH frame by server that collects all multiple pages 
4. It uses HPACK for data compression.

 */
