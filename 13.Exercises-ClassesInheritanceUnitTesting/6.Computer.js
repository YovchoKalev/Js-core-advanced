function createComputerHierarchy() {
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = Number(expectedLife);
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = Number(responseTime);
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set  battery (value){
            if(!(value instanceof Battery)){
                throw new TypeError;
            }

            this._battery = value;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard (value){
            if(!(value instanceof Keyboard)){
                throw new TypeError;
            }

            this._keyboard = value;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor (value){
            if(!(value instanceof Monitor)){
                throw new TypeError;
            }

            this._monitor = value;
        }
    }


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}