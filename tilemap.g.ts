// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005010101040404010101010104040401010101010104040401010101010101040404010101010104040404040104040101010103030304040403030303030404040303030303030404040303030303030304040403030303030404040404030404030303030303030202020303030303020202030303030303020202030303030303030202020303030303020202020203020203030303`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
222...22222...222222...2222222...22222.....2..2222
..................................................
..................................................
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.dungeon.hazardLava1,sprites.vehicle.roadIntersection3,sprites.dungeon.hazardLava0,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
