import { getAllLaunchPadDetails, getAllFailedLaunchesDetails, getAllSatellites } from "./library";

it("Get the details of launch pad, including launches", () => {
    window.fetch = jest.fn(() => {
        const launch = { 
            "name": "Kwajalein Atoll",
            "launches": [
                "5eb87cd9ffd86e000604b32a",
                "5eb87cdaffd86e000604b32b",
                "5eb87cdbffd86e000604b32c",
                "5eb87cdbffd86e000604b32d",
                "5eb87cdcffd86e000604b32e"
            ]
         };

        return Promise.resolve({
          json: () => Promise.resolve(launch),
        });
    });
    expect.assertions(2);
    return getAllLaunchPadDetails("mock").then(data => {
        expect(data.name).toBe("Kwajalein Atoll");
        expect(data.launches[0]).toBe("5eb87cd9ffd86e000604b32a");
    })
})

it("Handles and return empty array when the launch pad id is not found", () => {
    window.fetch = jest.fn(() => {
        return Promise.resolve({
          json: () => Promise.reject({status: "404"}),
        });
    });
    expect.assertions(1);
    return getAllLaunchPadDetails("mock").then(data => {
        expect(data).toStrictEqual([]);
    })
})

it("Get the details of failed launches", () => {
    const launches = [
        "5eb87cd9ffd86e000604b32a",
        "5eb87cdaffd86e000604b32b",
        "5eb87cdbffd86e000604b32c",
        "5eb87cdbffd86e000604b32d",
        "5eb87cdcffd86e000604b32e"
    ]
    window.fetch = jest.fn(() => {
        const launch = { 
            "name": "FalconSat",
            "failures": [
                {
                    "time": 33,
                    "altitude": null,
                    "reason": "merlin engine failure"
                }
            ]
         };

        return Promise.resolve({
          json: () => Promise.resolve(launch),
        });
    });
    expect.assertions(3);
    return getAllFailedLaunchesDetails(launches).then(data => {
        expect(data.length).toBe(5);
        expect(data[0].name).toBe("FalconSat");
        expect(data[0].failures[0].reason).toBe("merlin engine failure");
    })
})

it("Test retrieving all satelites and set to local storage", () => {
    class LocalStorageMock {
        constructor() {
          this.store = {};
        }
      
        getItem(key) {
          return this.store[key] || null;
        }
      
        setItem(key, value) {
          this.store[key] = String(value);
        }
    }
      
    window.localStorage = new LocalStorageMock();
    window.fetch = jest.fn(() => {
        const satellite = [
            {
                "spaceTrack": {     
                    "LAUNCH_DATE": "2019-05-24",
                },
                "launch": "5eb87d30ffd86e000604b378",
                "id": "5eed770f096e59000698560d"
            }
        ]

        return Promise.resolve({
          json: () => Promise.resolve(satellite),
        });
    });
    expect.assertions(3)
    return getAllSatellites().then(data => {
        expect(data.length).toBe(1);
        expect(data[0].spaceTrack.LAUNCH_DATE).toBe("2019-05-24");
        expect(JSON.parse(localStorage.getItem("satellites"))[0].launch).toBe("5eb87d30ffd86e000604b378")
    })
})