export function getPrice(
    minPrice: number, 
    storagePrice: number, 
    transferPrice: number, 
    storageCount: number, 
    transferCount: number,
    maxPrice?: number,
    freeGB = 0
  ): number {
    let price = 0;
  
    if (storageCount <= freeGB) {
      storagePrice = 0;
    }
  
    if (transferCount <= freeGB) {
      transferPrice = 0;
    }
  
    price += ((storagePrice * (storageCount - freeGB)) + ((transferCount - freeGB) * transferPrice));
  
    if (price < minPrice && transferCount !== 0 && storageCount !== 0) {
      price = minPrice;
    }
   
    if (maxPrice && price > maxPrice) {
      price = maxPrice;
    }
  
    return price;
  }
  