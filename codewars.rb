# Ruby notes:
# Ruby is an Object Oriented Programming lanaguage. Code is organized in classes and objects which allow applications to access methods and variables across the application in an organized and intuitive way. (think russian doll) 
# The word 'object is an abstraction of thought - 
# In code, an object is defined in a partcular way but is not prescripting. Its made up of methods and values.
# For example an object Pipe could contain values for length, diameter, material, manufacturer, etc, and also methods that are performed on that data.
# "An object in code is a thing with all the data and all the logic required to complete a task"
# Ruby comes with Integer, String, Array, Hash which are all types of Objects. We can create our own unique Objects with the class keyword

def greet name, name2
    puts "Hello, #{name} and #{name2} how are you all doing today?"
end

greet 'Lydia', 'Meredith'