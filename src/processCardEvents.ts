import { cardEventsFromDifferentCards } from './inputs/cardEventsFromDifferentCards'
import { CardEvent, Transaction } from './types'

type CardTransactionMapping = {
  [cardId: string]: Transaction
}

/**
 * Write a function that receives a large batch of card events from multiple cards,
 * returning an object which maps from cardId -> valid transaction. Only cardIds with
 * a valid transaction should appear in the returned object.
 *
 * A valid transaction is a pair of card events, starting with a RESERVATION event
 * and finishing with either a CONFIRMATION or CANCELLATION event.
 *
 * The input is an array of unprocessed card events. Some events might be duplicated
 * or missing. For duplicated events, you may only use one of its occurrences and
 * discard the rest. Missing events invalidate the transaction.
 *
 * @param cardEvents CardEvent[] List of card events
 * @returns CardTransactionMapping Valid transactions grouped by cardId
 */
export const processCardEvents = (cardEvents: CardEvent[]): CardTransactionMapping => {

  // logic
  let obj={}
      for(let i=0;i<cardEvents.length;i++){
        
        let newArr=[]
        if(cardEvents[i].type=="RESERVATION" ){
          obj={
                  amount:cardEvents[i].amount,
                  cardId:cardEvents[i].cardId,
                  id:cardEvents[i].id,
                  type:cardEvents[i].type
              }
              newArr.push(obj)
            }
              //console.log(obj.cardId)
        if(cardEvents[i].type=="CANCELLATION"|| cardEvents[i].type=="CONFIRMATION"){
                let newObj={
                    amount:cardEvents[i].amount,
                    cardId:cardEvents[i].cardId,
                    id:cardEvents[i].id,
                    type:cardEvents[i].type
                }
              
              newArr.push(newObj)
            }
        console.log(newArr)
    }

  return {} as CardTransactionMapping
}
