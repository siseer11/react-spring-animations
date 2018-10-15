import { Keyframes , config } from 'react-spring';
import {delay} from './delay';

export const MyImageAnimation = Keyframes.Spring({
 leave : async(next)=>{
  await delay(500),
  await next({from : {imgY : 0 , display : 1}}),
  await next({to : {imgY : -100 , display : 1} , config: config.molasses}),
  await delay(100),
  await next({to : {display : 0}})
 },
 off : {from : {imgY : -100 , display : 1} , to : {imgY : -100 , display : 0}},
 enter : async(nexts)=>{
  nexts({from : {imgY : 100 , display : 1}}),
  await nexts({to : {display : 1 , imgY : 100} , immediate : true}),
  await delay(500),
  await nexts({to: {imgY : 0} , config: config.molasses})
 }
})


export const MyTextAnimation = Keyframes.Trail({
 leave : async(next)=>{
  await next({from : {tY : 0 , display : 1 , opacity : 1}}),
  await next({from : {tY : 0 , display : 1} , to : {tY : -100 , display : 1 , opacity : 0} , config: config.molasses}),
  await delay(100),
  await next({to : {display : 0}})
 },
 off : {from : {tY : -100 , display : 1} , to : {tY : 0 , display : 1 , opacity : 0}},
 enter : async(nexts)=>{
  nexts({from : {tY : 200 , display : 1 , opacity : 0}}),
  await delay(500)
  await nexts({to: {tY : 0 , opacity : 1 , display : 1} , config: config.molasses})
 }
})

