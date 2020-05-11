## Abstract

* This application is a concert recommendation system made using MERN stack.
* It's a prototype app. So it might not work perfectly.
* Recommendation system operates on Front-end. It is made using Tensorflow module.



## Run

```shell
# From concert-recommend-proto(root)
npm install

# From concert-recommend-proto/client
npm install

# From concert-recommend-proto/
npm run dev
# or
yarn dev
```



## DB

Information on the concert is being stored in MongoDB. Please change the settings in `config/keys.js` if you want to use it.



## Naive Architecture Diagram

* This is a simple diagram. There maybe some missing or incorrect parts, so please use for reference.

#### User authentication

![arc1](https://user-images.githubusercontent.com/47481501/81602551-c8a28f00-9407-11ea-9ea6-e3ca935256ad.png)

#### Recommendation

![arc2](https://user-images.githubusercontent.com/47481501/81602664-f7b90080-9407-11ea-86bb-e97471bc4466.png)



## References

* [React](https://reactjs.org)
* [Material UI](https://material-ui.com)
* [The MERN Stack Tutorial – Building A React CRUD Application From Start To Finish](https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/)
* [Tensorflow javascript](https://js.tensorflow.org/api/latest/)
* [Machinelearn.js](https://www.machinelearnjs.com/)
* [티켓링크](http://www.ticketlink.co.kr/)

