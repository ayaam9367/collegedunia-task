import {assert, should, expect} from "chai";

//activate should assertions
should();
expect();


//####### ASSERT ###########

describe('Aspect check', function(){
    let userName = 'ayaam';
    let mylist = {
        item :[{
            id: 1,
            name:'demo'
        },
        {
            id: 2,
            name:'demo2'
        }
    ],
        title: 'user list'
    }
    it("check string", function(){
        assert.typeOf(userName, 'string');
    })
    it("equal match", function(){
        assert.equal(userName, 'ayaam');
    })
    it("length match", function(){
        assert.lengthOf(mylist.item, 2);
    })
})



//########### SHOULD ###########

describe('should check', function(){
    let userName = 'ayaam verma';
    let mylist = {
        item :[{
            id: 1,
            name:'demo'
        },
        {
            id: 2,
            name:'demo2'
        }
    ],
        title: 'user list'
    }

    it('check string', function(){
        userName.should.be.a('string');
    })

    it('equal check', function(){
        userName.should.be.equal('ayaam verma');
    })

    it('length check', function(){
        mylist.should.have.property('item').with.lengthOf(2);
    })
});


//############# EXPECT ###########

describe("check expect", function(){
    let userName = 'ayaam verma';
    let mylist = {
        item :[{
            id: 1,
            name:'demo'
        },
        {
            id: 2,
            name:'demo2'
        }
    ],
        title: 'user list'
    }

    it('string match', function(){
        expect(userName).to.be.a('string')
    })
    it('equal match', function(){
        expect(userName).to.be.equal('ayaam verma');
    })
    it('length match', function(){
        expect(mylist).to.have.property('item').with.lengthOf(2);
    })
    it('object match', function(){
        expect(mylist).to.have.all.keys('item', 'title');   
    })
})